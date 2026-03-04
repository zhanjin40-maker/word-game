// 生字数据 (基于人教版二年级下册写字表)
const unitData = {
    1: [
        {char: '诗', pinyin: 'shī'}, {char: '碧', pinyin: 'bì'}, {char: '妆', pinyin: 'zhuāng'}, {char: '绿', pinyin: 'lǜ'}, 
        {char: '丝', pinyin: 'sī'}, {char: '剪', pinyin: 'jiǎn'}, {char: '童', pinyin: 'tóng'}, {char: '归', pinyin: 'guī'},
        {char: '冲', pinyin: 'chōng'}, {char: '寻', pinyin: 'xún'}, {char: '眉', pinyin: 'méi'}, {char: '吐', pinyin: 'tǔ'}, 
        {char: '闷', pinyin: 'mèn'}, {char: '柳', pinyin: 'liǔ'}, {char: '荡', pinyin: 'dàng'}, {char: '桃', pinyin: 'táo'},
        {char: '鲜', pinyin: 'xiān'}, {char: '原', pinyin: 'yuán'}, {char: '叔', pinyin: 'shū'}, {char: '通', pinyin: 'tōng'}, 
        {char: '巧', pinyin: 'qiǎo'}, {char: '惊', pinyin: 'jīng'}, {char: '礼', pinyin: 'lǐ'},
        {char: '邓', pinyin: 'dèng'}, {char: '植', pinyin: 'zhí'}, {char: '格', pinyin: 'gé'}, {char: '引', pinyin: 'yǐn'}, 
        {char: '注', pinyin: 'zhù'}, {char: '满', pinyin: 'mǎn'},
        {char: '剧', pinyin: 'jù'}, {char: '场', pinyin: 'chǎng'}, {char: '闻', pinyin: 'wén'}
    ],
    2: [
        {char: '雷', pinyin: 'léi'}, {char: '锋', pinyin: 'fēng'}, {char: '昨', pinyin: 'zuó'}, {char: '背', pinyin: 'bēi'}, 
        {char: '洒', pinyin: 'sǎ'}, {char: '汗', pinyin: 'hàn'}, {char: '温', pinyin: 'wēn'}, {char: '暖', pinyin: 'nuǎn'},
        {char: '桌', pinyin: 'zhuō'}, {char: '尝', pinyin: 'cháng'}, {char: '买', pinyin: 'mǎi'}, {char: '具', pinyin: 'jù'}, 
        {char: '甘', pinyin: 'gān'}, {char: '汁', pinyin: 'zhī'}, {char: '甜', pinyin: 'tián'}, {char: '菜', pinyin: 'cài'}, 
        {char: '劳', pinyin: 'láo'}, {char: '应', pinyin: 'yīng'},
        {char: '弱', pinyin: 'ruò'}, {char: '周', pinyin: 'zhōu'}, {char: '末', pinyin: 'mò'}, {char: '母', pinyin: 'mǔ'}, 
        {char: '吸', pinyin: 'xī'}, {char: '芬', pinyin: 'fēn'}, {char: '芳', pinyin: 'fāng'}, {char: '递', pinyin: 'dì'}, 
        {char: '勇', pinyin: 'yǒng'}, {char: '敢', pinyin: 'gǎn'},
        {char: '程', pinyin: 'chéng'}, {char: '术', pinyin: 'shù'}, {char: '服', pinyin: 'fú'}, {char: '务', pinyin: 'wù'}
    ],
    3: [
        {char: '神', pinyin: 'shén'}, {char: '州', pinyin: 'zhōu'}, {char: '华', pinyin: 'huá'}, {char: '各', pinyin: 'gè'}, 
        {char: '族', pinyin: 'zú'}, {char: '情', pinyin: 'qíng'}, {char: '谊', pinyin: 'yì'}, {char: '齐', pinyin: 'qí'},
        {char: '传', pinyin: 'chuán'}, {char: '统', pinyin: 'tǒng'}, {char: '贴', pinyin: 'tiē'}, {char: '街', pinyin: 'jiē'}, 
        {char: '扫', pinyin: 'sǎo'}, {char: '龙', pinyin: 'lóng'}, {char: '艾', pinyin: 'ài'}, {char: '全', pinyin: 'quán'}, 
        {char: '团', pinyin: 'tuán'}, {char: '真', pinyin: 'zhēn'},
        {char: '甲', pinyin: 'jiǎ'}, {char: '骨', pinyin: 'gǔ'}, {char: '觉', pinyin: 'jué'}, {char: '品', pinyin: 'pǐn'}, 
        {char: '钱', pinyin: 'qián'}, {char: '币', pinyin: 'bì'}, {char: '与', pinyin: 'yǔ'}, {char: '财', pinyin: 'cái'},
        {char: '食', pinyin: 'shí'}, {char: '茄', pinyin: 'qié'}, {char: '烤', pinyin: 'kǎo'}, {char: '鸭', pinyin: 'yā'}, 
        {char: '煮', pinyin: 'zhǔ'}, {char: '鸡', pinyin: 'jī'}, {char: '蛋', pinyin: 'dàn'}, {char: '饭', pinyin: 'fàn'},
        {char: '辣', pinyin: 'là'}, {char: '乎', pinyin: 'hū'}
    ],
    4: [
        {char: '梦', pinyin: 'mèng'}, {char: '硬', pinyin: 'yìng'}, {char: '铅', pinyin: 'qiān'}, {char: '盒', pinyin: 'hé'}, 
        {char: '森', pinyin: 'sēn'}, {char: '结', pinyin: 'jié'}, {char: '苹', pinyin: 'píng'}, {char: '精', pinyin: 'jīng'}, 
        {char: '灵', pinyin: 'líng'}, {char: '流', pinyin: 'liú'},
        {char: '匹', pinyin: 'pǐ'}, {char: '妹', pinyin: 'mèi'}, {char: '波', pinyin: 'bō'}, {char: '纹', pinyin: 'wén'}, 
        {char: '恋', pinyin: 'liàn'}, {char: '舍', pinyin: 'shě'}, {char: '求', pinyin: 'qiú'}, {char: '奔', pinyin: 'bēn'},
        {char: '旁', pinyin: 'páng'}, {char: '阿', pinyin: 'ā'}, {char: '姨', pinyin: 'yí'}, {char: '弟', pinyin: 'dì'}, 
        {char: '便', pinyin: 'biàn'}, {char: '教', pinyin: 'jiào'}, {char: '拼', pinyin: 'pīn'}, {char: '音', pinyin: 'yīn'},
        {char: '坦', pinyin: 'tǎn'}, {char: '克', pinyin: 'kè'}
    ],
    5: [
        {char: '亡', pinyin: 'wáng'}, {char: '补', pinyin: 'bǔ'}, {char: '牢', pinyin: 'láo'}, {char: '劝', pinyin: 'quàn'}, 
        {char: '丢', pinyin: 'diū'}, {char: '助', pinyin: 'zhù'}, {char: '坏', pinyin: 'huài'}, {char: '死', pinyin: 'sǐ'},
        {char: '室', pinyin: 'shì'}, {char: '排', pinyin: 'pái'}, {char: '而', pinyin: 'ér'}, {char: '实', pinyin: 'shí'}, 
        {char: '候', pinyin: 'hòu'}, {char: '班', pinyin: 'bān'}, {char: '哈', pinyin: 'hā'}, {char: '举', pinyin: 'jǔ'},
        {char: '愿', pinyin: 'yuàn'}, {char: '意', pinyin: 'yì'}, {char: '麦', pinyin: 'mài'}, {char: '伯', pinyin: 'bó'}, 
        {char: '刻', pinyin: 'kè'}, {char: '突', pinyin: 'tū'}, {char: '然', pinyin: 'rán'}, {char: '掉', pinyin: 'diào'},
        {char: '商', pinyin: 'shāng'}, {char: '厦', pinyin: 'shà'}, {char: '洞', pinyin: 'dòng'}, {char: '穴', pinyin: 'xué'}
    ],
    6: [
        {char: '窗', pinyin: 'chuāng'}, {char: '含', pinyin: 'hán'}, {char: '岭', pinyin: 'lǐng'}, {char: '泊', pinyin: 'bó'}, 
        {char: '吴', pinyin: 'wú'}, {char: '净', pinyin: 'jìng'}, {char: '莲', pinyin: 'lián'}, {char: '映', pinyin: 'yìng'},
        {char: '乌', pinyin: 'wū'}, {char: '黑', pinyin: 'hēi'}, {char: '沉', pinyin: 'chén'}, {char: '压', pinyin: 'yā'}, 
        {char: '响', pinyin: 'xiǎng'}, {char: '新', pinyin: 'xīn'}, {char: '迎', pinyin: 'yíng'}, {char: '扑', pinyin: 'pū'},
        {char: '指', pinyin: 'zhǐ'}, {char: '南', pinyin: 'nán'}, {char: '针', pinyin: 'zhēn'}, {char: '帮', pinyin: 'bāng'}, 
        {char: '忠', pinyin: 'zhōng'}, {char: '导', pinyin: 'dǎo'}, {char: '永', pinyin: 'yǒng'}, {char: '夜', pinyin: 'yè'}, 
        {char: '特', pinyin: 'tè'}, {char: '积', pinyin: 'jī'},
        {char: '航', pinyin: 'háng'}, {char: '宇', pinyin: 'yǔ'}, {char: '宙', pinyin: 'zhòu'}, {char: '或', pinyin: 'huò'}, 
        {char: '浴', pinyin: 'yù'}, {char: '桶', pinyin: 'tǒng'},
        {char: '馆', pinyin: 'guǎn'}, {char: '所', pinyin: 'suǒ'}
    ],
    7: [
        {char: '扇', pinyin: 'shàn'}, {char: '慢', pinyin: 'màn'}, {char: '遇', pinyin: 'yù'}, {char: '定', pinyin: 'dìng'}, 
        {char: '病', pinyin: 'bìng'}, {char: '睡', pinyin: 'shuì'}, {char: '根', pinyin: 'gēn'}, {char: '痛', pinyin: 'tòng'},
        {char: '店', pinyin: 'diàn'}, {char: '决', pinyin: 'jué'}, {char: '需', pinyin: 'xū'}, {char: '付', pinyin: 'fù'}, 
        {char: '夫', pinyin: 'fū'}, {char: '终', pinyin: 'zhōng'}, {char: '期', pinyin: 'qī'},
        {char: '蛙', pinyin: 'wā'}, {char: '卖', pinyin: 'mài'}, {char: '搬', pinyin: 'bān'}, {char: '倒', pinyin: 'dào'}, 
        {char: '泉', pinyin: 'quán'}, {char: '砍', pinyin: 'kǎn'}, {char: '破', pinyin: 'pò'}, {char: '泳', pinyin: 'yǒng'},
        {char: '仿', pinyin: 'fǎng'}, {char: '佛', pinyin: 'fú'}, {char: '并', pinyin: 'bìng'}, {char: '任', pinyin: 'rèn'}, 
        {char: '何', pinyin: 'hé'}, {char: '纺', pinyin: 'fǎng'}, {char: '织', pinyin: 'zhī'}, {char: '迟', pinyin: 'chí'},
        {char: '校', pinyin: 'jiào'}, {char: '内', pinyin: 'nèi'}
    ],
    8: [
        {char: '射', pinyin: 'shè'}, {char: '最', pinyin: 'zuì'}, {char: '始', pinyin: 'shǐ'}, {char: '换', pinyin: 'huàn'}, 
        {char: '值', pinyin: 'zhí'}, {char: '弓', pinyin: 'gōng'}, {char: '炎', pinyin: 'yán'}, {char: '此', pinyin: 'cǐ'},
        {char: '忽', pinyin: 'hū'}, {char: '件', pinyin: 'jiàn'}, {char: '启', pinyin: 'qǐ'}, {char: '召', pinyin: 'zhào'}, 
        {char: '众', pinyin: 'zhòng'}, {char: '完', pinyin: 'wán'}, {char: '却', pinyin: 'què'}, {char: '供', pinyin: 'gōng'},
        {char: '洪', pinyin: 'hóng'}, {char: '姓', pinyin: 'xìng'}, {char: '带', pinyin: 'dài'}, {char: '灾', pinyin: 'zāi'}, 
        {char: '必', pinyin: 'bì'}, {char: '须', pinyin: 'xū'}, {char: '仍', pinyin: 'réng'}, {char: '继', pinyin: 'jì'}, 
        {char: '续', pinyin: 'xù'}, {char: '业', pinyin: 'yè'},
        {char: '灿', pinyin: 'càn'}, {char: '烂', pinyin: 'làn'}
    ]
};

// 游戏状态
let currentState = {
    unitId: null, // Track current unit
    selectedBubbles: [],
    matchedPairs: 0,
    startTime: 0,
    timerInterval: null,
    errors: [],
    totalPairs: 9 // 每次游戏9对
};

// 颜色库
const bubbleColors = [
    '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', 
    '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', 
    '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3', 
    '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC'
];

// 音效管理器
const SoundManager = {
    audioContext: null,
    isMuted: false, // 全局静音
    isBGMEnabled: true, // 背景音乐开关
    isSFXEnabled: true, // 音效开关

    init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    toggleMute() {
        this.isMuted = !this.isMuted;
        // ... (原有的静音逻辑如果还需要的话，可以保留，或者用新的 BGM 切换逻辑替代)
    },
    
    toggleBGM() {
        this.isBGMEnabled = !this.isBGMEnabled;
        const btn = document.getElementById('bgm-toggle');
        btn.textContent = this.isBGMEnabled ? '🎵' : '🔇';
        btn.classList.toggle('muted', !this.isBGMEnabled);

        const bgm = document.getElementById('bgm');
        if (this.isBGMEnabled) {
             // 只有在游戏进行中才播放
            if (!document.getElementById('game-screen').classList.contains('hidden')) {
                bgm.play().catch(e => console.log('BGM play failed', e));
            }
        } else {
            bgm.pause();
        }
    },

    toggleSFX() {
        this.isSFXEnabled = !this.isSFXEnabled;
        const btn = document.getElementById('sfx-toggle');
        btn.textContent = this.isSFXEnabled ? '🔔' : '🔕';
        btn.classList.toggle('muted', !this.isSFXEnabled);
    },

    playBGM() {
        if (!this.isBGMEnabled) return; // 检查 BGM 开关
        const bgm = document.getElementById('bgm');
        bgm.currentTime = 0;
        bgm.volume = 0.3;
        bgm.play().catch(() => {
            console.log('BGM file not found or autoplay blocked.');
        });
    },

    stopBGM() {
        const bgm = document.getElementById('bgm');
        bgm.pause();
    },

    playSuccess() {
        if (!this.isSFXEnabled) return; // 检查音效开关
        
        // Try playing file first
        const audio = document.getElementById('sfx-success');
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // File not found or error, fallback to synth
                this.synthSuccess();
            });
        }
    },

    playFail() {
        if (!this.isSFXEnabled) return; // 检查音效开关

        // Try playing file first
        const audio = document.getElementById('sfx-fail');
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // File not found or error, fallback to synth
                this.synthFail();
            });
        }
    },


    // Synthesized Sound Effects (Web Audio API)
    synthSuccess() {
        this.init();
        const ctx = this.audioContext;
        const t = ctx.currentTime;

        // Play a major arpeggio (C5, E5, G5, C6)
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t + i * 0.1);
            
            gain.gain.setValueAtTime(0.1, t + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.1 + 0.3);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(t + i * 0.1);
            osc.stop(t + i * 0.1 + 0.3);
        });
    },

    synthFail() {
        this.init();
        const ctx = this.audioContext;
        const t = ctx.currentTime;

        // Play a sliding sawtooth (like a buzzer/crow)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(50, t + 0.4); // Slide down
        
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(t);
        osc.stop(t + 0.4);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 绑定 BGM 开关事件
    const bgmBtn = document.getElementById('bgm-toggle');
    if (bgmBtn) {
        bgmBtn.addEventListener('click', () => {
            SoundManager.toggleBGM();
        });
    }
    
    // 绑定 SFX 开关事件
    const sfxBtn = document.getElementById('sfx-toggle');
    if (sfxBtn) {
        sfxBtn.addEventListener('click', () => {
            SoundManager.toggleSFX();
        });
    }

    // 绑定点击空白处取消选择事件
    const gameScreen = document.getElementById('game-screen');
    if (gameScreen) {
        gameScreen.addEventListener('click', (e) => {
            // 如果点击的是背景区域（game-screen 或 game-board），则取消选择
            // 还需要排除控制按钮和返回按钮
            if (e.target.id === 'game-screen' || e.target.id === 'game-board') {
                deselectAll();
            }
        });
    }
});

function deselectAll() {
    currentState.selectedBubbles.forEach(bubble => {
        bubble.classList.remove('selected');
    });
    currentState.selectedBubbles = [];
}

function toggleMute() {
    SoundManager.toggleMute();
}

function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 启动游戏
function startGame(unitId) {
    const unitWords = unitData[unitId];
    if (!unitWords) return;

    // 显示游戏界面
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('result-modal').classList.add('hidden');

    // 重置状态
    currentState = {
        unitId: unitId,
        selectedBubbles: [],
        matchedPairs: 0,
        startTime: Date.now(),
        timerInterval: null,
        errors: [],
        totalPairs: 9
    };
    
    // 如果单元字数不足9个，则取全部
    const gameWords = unitWords.length >= 9 ? getRandomItems([...unitWords], 9) : [...unitWords];
    currentState.totalPairs = gameWords.length;

    // 生成泡泡数据：字泡泡 + 拼音泡泡
    let bubbleItems = [];
    gameWords.forEach(word => {
        bubbleItems.push({ type: 'char', content: word.char, id: word.char, matchId: word.char });
        bubbleItems.push({ type: 'pinyin', content: word.pinyin, id: word.pinyin, matchId: word.char });
    });

    // 打乱
    bubbleItems = shuffle(bubbleItems);

    // 渲染
    renderBoard(bubbleItems);

    // 启动计时器
    startTimer();
    
    // 播放背景音乐
    SoundManager.playBGM();
}

function renderBoard(items) {
    const board = document.getElementById('game-board');
    board.innerHTML = '';

    items.forEach(item => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        if (item.type === 'pinyin') {
            bubble.classList.add('pinyin');
        }
        bubble.textContent = item.content;
        bubble.dataset.matchId = item.matchId;
        bubble.dataset.content = item.content; // 用于错误记录
        
        // 随机颜色
        const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        // 使用CSS变量传递颜色给style.css
        bubble.style.setProperty('--bubble-color', color);
        // 为了文字清晰，深色文字
        bubble.style.color = '#333';

        bubble.onclick = () => handleBubbleClick(bubble);
        board.appendChild(bubble);
    });
}

function handleBubbleClick(bubble) {
    // 忽略已匹配或已选中的
    if (bubble.classList.contains('matched') || bubble.classList.contains('selected')) return;
    
    // 限制只能选2个
    if (currentState.selectedBubbles.length >= 2) return;

    // 选中效果
    bubble.classList.add('selected');
    currentState.selectedBubbles.push(bubble);

    if (currentState.selectedBubbles.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [b1, b2] = currentState.selectedBubbles;
    const match1 = b1.dataset.matchId;
    const match2 = b2.dataset.matchId;

    if (match1 === match2) {
        // 匹配成功
        setTimeout(() => {
            b1.classList.remove('selected');
            b2.classList.remove('selected');
            b1.classList.add('matched');
            b2.classList.add('matched');
            currentState.matchedPairs++;
            SoundManager.playSuccess();
            checkWin();
        }, 300);
    } else {
        // 匹配失败
        // 记录错误 (记录生字)
        SoundManager.playFail();
        const charBubble = b1.textContent.match(/[\u4e00-\u9fa5]/) ? b1 : b2;
        // 如果两个都不是汉字(不可能)，或者都是(不可能)，简单起见，取matchId
        const errorChar = match1; 
        if (!currentState.errors.includes(errorChar)) {
            currentState.errors.push(errorChar);
        }

        setTimeout(() => {
            b1.classList.remove('selected');
            b2.classList.remove('selected');
        }, 800); // 稍微长一点的延迟让用户看清
    }

    currentState.selectedBubbles = [];
}

function checkWin() {
    if (currentState.matchedPairs === currentState.totalPairs) {
        clearInterval(currentState.timerInterval);
        showResult();
    }
}

function startTimer() {
    if (currentState.timerInterval) clearInterval(currentState.timerInterval);
    const display = document.getElementById('time-display');
    
    currentState.timerInterval = setInterval(() => {
        const now = Date.now();
        const diff = Math.floor((now - currentState.startTime) / 1000);
        const min = Math.floor(diff / 60).toString().padStart(2, '0');
        const sec = (diff % 60).toString().padStart(2, '0');
        display.textContent = `${min}:${sec}`;
    }, 1000);
}

function showResult() {
    const modal = document.getElementById('result-modal');
    const timeDisplay = document.getElementById('time-display').textContent;
    document.getElementById('final-time').textContent = timeDisplay;
    
    const errorSection = document.getElementById('error-section');
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = '';

    if (currentState.errors.length > 0) {
        errorSection.classList.remove('hidden');
        currentState.errors.forEach(char => {
            const li = document.createElement('li');
            li.textContent = char;
            errorList.appendChild(li);
        });
    } else {
        errorSection.classList.add('hidden');
    }

    modal.classList.remove('hidden');
}

function goHome() {
    clearInterval(currentState.timerInterval);
    SoundManager.stopBGM();
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-modal').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}

function restartCurrentGame() {
    if (currentState.unitId) {
        startGame(currentState.unitId);
    } else {
        goHome();
    }
}