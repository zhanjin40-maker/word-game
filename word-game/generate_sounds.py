import wave
import math
import random
import struct

def clamp(val):
    return max(-32768, min(32767, int(val)))

def save_wav(filename, data, sample_rate=44100):
    with wave.open(filename, 'w') as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(sample_rate)
        # Normalize
        max_val = max(abs(x) for x in data) if data else 1
        if max_val > 0:
            norm_factor = 25000.0 / max_val 
            data = [x * norm_factor for x in data]
        
        for sample in data:
            f.writeframes(struct.pack('<h', clamp(sample)))

# Synth Helper: Marimba (Woody, short sustain)
def synth_marimba(freq, dur, sample_rate=44100):
    n = int(sample_rate * dur)
    res = []
    for i in range(n):
        t = i / sample_rate
        # Fundamental + strong 4th harmonic for wood sound
        val = math.sin(2 * math.pi * freq * t) + 0.5 * math.sin(2 * math.pi * freq * 4 * t)
        
        # Envelope: Fast attack, exponential decay
        env = math.exp(-8.0 * t)
        if t < 0.005: env *= (t / 0.005) # De-click
        
        res.append(val * env)
    return res

# Synth Helper: Soft Pluck (Harp-like)
def synth_pluck(freq, dur, sample_rate=44100):
    n = int(sample_rate * dur)
    res = []
    for i in range(n):
        t = i / sample_rate
        val = math.sin(2 * math.pi * freq * t)
        env = math.exp(-3.0 * t)
        if t < 0.01: env *= (t / 0.01)
        res.append(val * env)
    return res

# 1. BGM: "Sunny Walk" (Marimba/Pluck mix)
# Cheerful, bouncy, unobtrusive
def create_bgm():
    beat = 0.25
    # C Major: C E G A | G E D -
    melody = [
        (261.63, beat), (329.63, beat), (392.00, beat), (440.00, beat), # C E G A
        (392.00, beat), (329.63, beat), (293.66, beat*2),               # G E D
        (329.63, beat), (349.23, beat), (392.00, beat), (329.63, beat), # E F G E
        (261.63, beat), (293.66, beat), (261.63, beat*2)                # C D C
    ]
    full_audio = []
    for freq, dur in melody:
        if freq == 0:
            full_audio.extend([0] * int(44100 * dur))
        else:
            note = synth_pluck(freq, dur)
            full_audio.extend(note)
            # Add silence to ensure separation
            gap = int(44100 * (dur - len(note)/44100))
            if gap > 0: full_audio.extend([0]*gap)
            
    save_wav('bgm.wav', full_audio)

# 2. Success: "Quick Sparkle" (Keep same)
def create_success():
    sr = 44100
    duration = 0.6
    n = int(duration * sr)
    buffer = [0.0] * n
    notes = [1046.50, 1318.51, 1567.98, 2093.00]
    for i, freq in enumerate(notes):
        note_n = int(0.3 * sr)
        start_idx = int(i * 0.04 * sr)
        for j in range(note_n):
            if start_idx + j < n:
                t = j / sr
                val = math.sin(2 * math.pi * freq * t) * math.exp(-20.0 * t)
                buffer[start_idx + j] += val * 0.7
    for _ in range(3):
        start_t = random.uniform(0.1, 0.3)
        start_idx = int(start_t * sr)
        noise_len = 0.04
        noise_samples = int(noise_len * sr)
        for k in range(noise_samples):
            if start_idx + k < n:
                val = random.uniform(-1, 1)
                env = 1.0 - (k / noise_samples)
                buffer[start_idx + k] += val * env * 0.15
    save_wav('applause.wav', buffer)

# 3. Fail: "Gentle Marimba Oops"
# Two low notes descending, very woody and soft
def create_fail():
    # G3 -> E3
    note1 = synth_marimba(196.00, 0.15) # G3
    note2 = synth_marimba(164.81, 0.25) # E3
    
    # Tiny silence between
    silence = [0.0] * int(44100 * 0.02)
    
    full_audio = note1 + silence + note2
    save_wav('crow.wav', full_audio)

if __name__ == "__main__":
    create_bgm()
    create_success()
    create_fail()
    print("Files regenerated: Sunny Walk BGM, Short Sparkle, Gentle Marimba Oops")
