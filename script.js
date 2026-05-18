const instrumentsData = [
    {
        id: 'crystal_baschet',
        name: 'Crystal Baschet',
        origin: 'France',
        regionColor: '#add8e6',
        description: 'A contemporary instrument that produces ethereal, glass-like resonant sounds through friction.',
        image: 'image/crystal_baschet.png',
        audio: 'audio/crystal_baschet.mp3',
        mapCoords: { x: 480, y: 140 },
        stats: [20, 90, 40, 30, 95], // Tempo, Resonance, Complexity, Earthiness, Mystique
        tags: ['Contemporary', 'Friction', 'Ethereal'],
        similar: ['fiddle', 'gayageum']
    },
    {
        id: 'duduk',
        name: 'Duduk',
        origin: 'Armenia',
        regionColor: '#ffbf00',
        description: 'An ancient double-reed woodwind instrument made of apricot wood, known for its mournful tone.',
        image: 'image/duduk.png',
        audio: 'audio/duduk.mp3',
        mapCoords: { x: 560, y: 160 },
        stats: [30, 75, 45, 80, 85],
        tags: ['Woodwind', 'Ancient', 'Melancholic'],
        similar: ['oud', 'sarangi']
    },
    {
        id: 'fiddle',
        name: 'Hardanger Fiddle',
        origin: 'Norway',
        regionColor: '#add8e6',
        description: 'A traditional stringed instrument with sympathetic under-strings that create a haunting, echoing resonance.',
        image: 'image/hardhangar_fiddle.png',
        audio: 'audio/fiddle.mp3',
        mapCoords: { x: 480, y: 90 },
        stats: [60, 85, 75, 60, 70],
        tags: ['Bowed String', 'Sympathetic Strings', 'Folk'],
        similar: ['nyckelharpa', 'sarangi']
    },
    {
        id: 'gayageum',
        name: 'Gayageum',
        origin: 'South Korea',
        regionColor: '#008080',
        description: 'A traditional Korean zither with 12 strings, producing deep, expressive bends and vibrato.',
        image: 'image/gayageum.png',
        audio: 'audio/gayageum.mp3',
        mapCoords: { x: 850, y: 170 },
        stats: [40, 80, 60, 70, 75],
        tags: ['Plucked Zither', 'Silk Strings', 'Court Music'],
        similar: ['guqin', 'kora']
    },
    {
        id: 'guqin',
        name: 'Guqin',
        origin: 'China',
        regionColor: '#008080',
        description: 'A plucked seven-string Chinese musical instrument of the zither family, prized for its quiet, subtle sounds.',
        image: 'image/Guqin.png',
        audio: 'audio/guqin.mp3',
        mapCoords: { x: 800, y: 180 },
        stats: [20, 85, 50, 60, 90],
        tags: ['Plucked Zither', 'Ancient', 'Meditative'],
        similar: ['gayageum', 'kora']
    },
    {
        id: 'hand_drum',
        name: 'Hand Drum',
        origin: 'Switzerland', // Per prompt request for map
        regionColor: '#ff7f50',
        description: 'A percussive instrument providing the rhythmic heartbeat of traditional ensembles.',
        image: 'image/hand_drum.png',
        audio: 'audio/hand_drum.mp3',
        mapCoords: { x: 490, y: 140 },
        stats: [80, 40, 30, 95, 20],
        tags: ['Percussion', 'Rhythmic', 'Acoustic'],
        similar: ['mbira', 'oud']
    },
    {
        id: 'kora',
        name: 'Kora',
        origin: 'Senegal',
        regionColor: '#ff7f50',
        description: 'A 21-string lute-bridge-harp used extensively by West African storytellers (griots).',
        image: 'image/kora.png',
        audio: 'audio/kora.mp3',
        mapCoords: { x: 420, y: 240 },
        stats: [70, 60, 85, 80, 60],
        tags: ['Harp-Lute', 'Griot Tradition', 'Complex'],
        similar: ['mbira', 'gayageum']
    },
    {
        id: 'mbira',
        name: 'Mbira',
        origin: 'Zimbabwe',
        regionColor: '#ff7f50',
        description: 'An African thumb piano consisting of a wooden board with attached staggered metal tines.',
        image: 'image/mbira.png',
        audio: 'audio/mbira.mp3',
        mapCoords: { x: 520, y: 360 },
        stats: [65, 55, 70, 90, 75],
        tags: ['Lamellophone', 'Trance', 'Thumb Piano'],
        similar: ['kora', 'hand_drum']
    },
    {
        id: 'nyckelharpa',
        name: 'Nyckelharpa',
        origin: 'Sweden',
        regionColor: '#add8e6',
        description: 'A traditional Swedish instrument that is a keyed fiddle, bowed but played with keys.',
        image: 'image/nyckelharpa.png',
        audio: 'audio/nyckelharpa.mp3',
        mapCoords: { x: 510, y: 90 },
        stats: [75, 70, 80, 65, 50],
        tags: ['Bowed String', 'Keyed', 'Folk Dance'],
        similar: ['fiddle', 'sarangi']
    },
    {
        id: 'oud',
        name: 'Oud',
        origin: 'Iraq',
        regionColor: '#ffbf00',
        description: 'A short-neck lute-type, pear-shaped stringed instrument renowned as the "king of instruments" in Arabic music.',
        image: 'image/oud.png',
        audio: 'audio/oud.mp3',
        mapCoords: { x: 580, y: 180 },
        stats: [50, 75, 80, 85, 60],
        tags: ['Plucked Lute', 'Fretless', 'Microtonal'],
        similar: ['duduk', 'kora']
    },
    {
        id: 'sarangi',
        name: 'Sarangi',
        origin: 'India',
        regionColor: '#ff9933',
        description: 'A bowed, short-necked string instrument from India, said to most closely resemble the human voice.',
        image: 'image/sarangi.png',
        audio: 'audio/sarangi.mp3',
        mapCoords: { x: 700, y: 220 },
        stats: [40, 85, 75, 70, 80],
        tags: ['Bowed String', 'Sympathetic Strings', 'Vocal Tone'],
        similar: ['fiddle', 'duduk']
    }
];

const moodMappings = {
    calm: ['guqin', 'gayageum', 'hand_drum'],
    energised: ['kora', 'mbira', 'nyckelharpa'],
    melancholic: ['duduk', 'sarangi', 'fiddle'],
    mystical: ['crystal_baschet', 'oud', 'fiddle'], // Replaced theremin with fiddle
    adventurous: ['kora', 'oud', 'mbira'],
    meditative: ['guqin', 'sarangi', 'hand_drum']
};

document.addEventListener('DOMContentLoaded', () => {
    // ---- 1. SETUP & UTILS ----
    const cursor = document.querySelector('.custom-cursor');
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        const target = e.target;
        if (target.closest('button') || target.closest('.instrument-card') || target.closest('.map-pin') || target.closest('.mood-tile') || target.closest('input[type=range]') || target.closest('input[type=text]') || target.closest('input[type=password]') || target.closest('textarea')) {
            cursor.classList.add('hovering');
        } else {
            cursor.classList.remove('hovering');
        }
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const grid = document.getElementById('masonry-grid');
    const audioElements = {};
    const userInstrumentDefaults = {
        origin: 'User Upload',
        regionColor: '#c9a84c',
        stats: [50, 50, 50, 50, 50],
        tags: ['User Upload'],
        similar: []
    };
    let userInstruments = [];
    
    // Playback State Machine
    let currentMode = 'idle'; // idle, normal, ambient, mood, therapy, soundscape
    let currentlyPlayingId = null;
    
    // Global Audio Stop Function
    function stopAllAudio() {
        Object.values(audioElements).forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
            audio.loop = false;
        });
        
        document.querySelectorAll('.instrument-card').forEach(card => card.classList.remove('playing'));
        document.getElementById('now-playing-bar').classList.remove('visible');
        document.getElementById('now-playing-bar').classList.add('hidden');
        document.getElementById('ambient-toggle').classList.remove('active');
        document.querySelectorAll('.mood-tile').forEach(t => t.classList.remove('active'));
        grid.classList.remove('grid-dimmed');
        document.querySelectorAll('.instrument-card').forEach(c => c.classList.remove('mood-active'));
        document.querySelectorAll('.therapy-card').forEach(c => c.classList.remove('active'));
        
        clearInterval(therapyInterval);
        clearInterval(moodInterval);
        currentlyPlayingId = null;
        currentMode = 'idle';
        if(soundscapeMixPlaying) stopSoundscapeMix();
    }

    function getAllPlayableInstruments() {
        return [...instrumentsData, ...userInstruments];
    }

    // --- IndexedDB persistence for uploads (avoids localStorage size limits) ---
    const UPLOAD_DB_NAME = 'echoes_uploads_db';
    const UPLOAD_STORE = 'instruments';
    const UPLOAD_DB_VERSION = 1;

    function openUploadsDb() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(UPLOAD_DB_NAME, UPLOAD_DB_VERSION);
            req.onerror = () => reject(req.error || new Error('Failed to open database.'));
            req.onupgradeneeded = () => {
                const db = req.result;
                if (!db.objectStoreNames.contains(UPLOAD_STORE)) {
                    db.createObjectStore(UPLOAD_STORE, { keyPath: 'id' });
                }
            };
            req.onsuccess = () => resolve(req.result);
        });
    }

    async function idbGetAllUploads() {
        const db = await openUploadsDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(UPLOAD_STORE, 'readonly');
            const store = tx.objectStore(UPLOAD_STORE);
            const req = store.getAll();
            req.onerror = () => reject(req.error || new Error('Failed to load uploads.'));
            req.onsuccess = () => resolve(Array.isArray(req.result) ? req.result : []);
        });
    }

    async function idbPutUpload(record) {
        const db = await openUploadsDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(UPLOAD_STORE, 'readwrite');
            const store = tx.objectStore(UPLOAD_STORE);
            const req = store.put(record);
            req.onerror = () => reject(req.error || new Error('Failed to save upload.'));
            req.onsuccess = () => resolve();
        });
    }

    function attachObjectUrls(inst) {
        const imageUrl = URL.createObjectURL(inst.imageBlob);
        const audioUrl = URL.createObjectURL(inst.audioBlob);
        return { ...inst, imageUrl, audioUrl, _objectUrls: [imageUrl, audioUrl] };
    }

    function revokeObjectUrls(inst) {
        if (!inst || !Array.isArray(inst._objectUrls)) return;
        inst._objectUrls.forEach(u => {
            try { URL.revokeObjectURL(u); } catch {}
        });
        inst._objectUrls = [];
    }

    function ensureAudio(inst) {
        if (audioElements[inst.id]) return audioElements[inst.id];
        const audioSrc = inst.audioUrl || inst.audio;
        const audio = new Audio(audioSrc);
        audioElements[inst.id] = audio;
        audio.addEventListener('ended', () => {
            if (currentMode === 'normal') stopAllAudio();
        });
        return audio;
    }

    function buildInstrumentCard(inst, idx, { enableDNA }) {
        ensureAudio(inst);

        const card = document.createElement('div');
        card.className = 'instrument-card';
        card.dataset.id = inst.id;
        setTimeout(() => card.classList.add('loaded'), idx * 100);

        const imageSrc = inst.imageUrl || inst.image;
        card.innerHTML = `
            <img src="${imageSrc}" class="card-bg" alt="${inst.name}">
            <div class="card-overlay">
                <h2 class="card-title">
                    ${inst.name}
                    <span class="map-dot" style="background-color: ${inst.regionColor}; box-shadow: 0 0 10px ${inst.regionColor}"></span>
                </h2>
                <div class="card-origin">${inst.origin}</div>
                <div class="card-desc">${inst.description}</div>
            </div>
            <svg class="play-btn" viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="4"></circle>
                <polygon points="40,30 40,70 70,50" fill="currentColor"></polygon>
            </svg>
            <div class="card-visualizer"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
        `;

        card.addEventListener('click', () => {
            if (enableDNA && currentMode === 'normal' && currentlyPlayingId === inst.id) {
                openDNAVisualizer(inst);
            } else {
                playNormal(inst.id);
            }
        });

        if (enableDNA) {
            card.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                openDNAVisualizer(inst);
            });
        }

        grid.appendChild(card);
    }

    // Build Cards & Audio (base instruments only)
    instrumentsData.forEach((inst, idx) => buildInstrumentCard(inst, idx, { enableDNA: true }));

    // Load + render user instruments (landing grid only)
    (async () => {
        try {
            const records = await idbGetAllUploads();
            userInstruments = records
                .filter(r =>
                    r &&
                    typeof r.id === 'string' &&
                    typeof r.name === 'string' &&
                    typeof r.description === 'string' &&
                    r.imageBlob instanceof Blob &&
                    r.audioBlob instanceof Blob
                )
                .map(r => attachObjectUrls({ ...userInstrumentDefaults, ...r }));

            userInstruments.forEach((inst, idx) => buildInstrumentCard(inst, instrumentsData.length + idx, { enableDNA: false }));
        } catch {
            userInstruments = [];
        }
    })();

    // NORMAL PLAYBACK
    function playNormal(id) {
        if(currentMode !== 'normal') stopAllAudio();
        currentMode = 'normal';
        
        const audio = audioElements[id];
        audio.currentTime = 0;
        audio.volume = 1.0;
        audio.play();
        currentlyPlayingId = id;
        
        const inst = getAllPlayableInstruments().find(i => i.id === id);
        document.getElementById('playing-instrument-name').textContent = inst ? inst.name : 'Unknown';
        document.getElementById('now-playing-bar').classList.remove('hidden');
        document.getElementById('now-playing-bar').classList.add('visible');
        
        document.querySelectorAll('.instrument-card').forEach(c => c.classList.remove('playing'));
        document.querySelector(`.instrument-card[data-id="${id}"]`).classList.add('playing');
    }

    document.getElementById('stop-btn').addEventListener('click', stopAllAudio);

    // AMBIENT MODE
    document.getElementById('ambient-toggle').addEventListener('click', () => {
        if (currentMode === 'ambient') {
            stopAllAudio();
        } else {
            stopAllAudio();
            currentMode = 'ambient';
            document.getElementById('ambient-toggle').classList.add('active');
            Object.values(audioElements).forEach(audio => {
                audio.volume = 0.1;
                audio.loop = true;
                audio.play();
            });
            document.querySelectorAll('.instrument-card').forEach(card => card.classList.add('playing'));
        }
    });

    // ---- FEATURE 1: SONIC ATLAS ----
    const mapContainer = document.getElementById('map-pins-container');
    instrumentsData.forEach(inst => {
        const pin = document.createElement('div');
        pin.className = 'map-pin';
        pin.style.left = `${(inst.mapCoords.x / 1000) * 100}%`;
        pin.style.top = `${(inst.mapCoords.y / 500) * 100}%`;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip';
        tooltip.textContent = `${inst.name} • ${inst.origin}`;
        pin.appendChild(tooltip);
        
        pin.addEventListener('click', () => {
            playNormal(inst.id);
            const card = document.querySelector(`.instrument-card[data-id="${inst.id}"]`);
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlight-glow');
            setTimeout(() => card.classList.remove('highlight-glow'), 2000);
        });
        
        mapContainer.appendChild(pin);
    });

    // ---- FEATURE 2: MOOD PANEL ----
    const moodPanel = document.getElementById('mood-panel');
    document.getElementById('mood-toggle').addEventListener('click', () => moodPanel.classList.add('open'));
    document.getElementById('mood-close').addEventListener('click', () => moodPanel.classList.remove('open'));
    
    let moodInterval = null;
    
    document.querySelectorAll('.mood-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const mood = tile.dataset.mood;
            const isCurrentlyActive = tile.classList.contains('active');
            
            stopAllAudio();
            
            if (!isCurrentlyActive) {
                currentMode = 'mood';
                tile.classList.add('active');
                
                const subset = moodMappings[mood];
                grid.classList.add('grid-dimmed');
                
                subset.forEach(id => {
                    document.querySelector(`.instrument-card[data-id="${id}"]`).classList.add('mood-active');
                    audioElements[id].volume = 0.6;
                });
                
                // Shuffle logic
                let shuffleIndex = 0;
                function playNextMoodTrack() {
                    subset.forEach(id => {
                        audioElements[id].pause();
                        audioElements[id].currentTime = 0;
                        document.querySelector(`.instrument-card[data-id="${id}"]`).classList.remove('playing');
                    });
                    
                    const id = subset[shuffleIndex];
                    audioElements[id].play();
                    document.querySelector(`.instrument-card[data-id="${id}"]`).classList.add('playing');
                    document.getElementById('playing-instrument-name').textContent = `Mood: ${tile.textContent.trim()} — Shuffle Playing`;
                    
                    shuffleIndex = (shuffleIndex + 1) % subset.length;
                }
                
                playNextMoodTrack();
                document.getElementById('now-playing-bar').classList.remove('hidden');
                document.getElementById('now-playing-bar').classList.add('visible');
                
                // Simple shuffle: change track every 15 seconds for demonstration, or on ended
                moodInterval = setInterval(playNextMoodTrack, 15000); 
            }
        });
    });

    // ---- FEATURE 3: THERAPY CORNER ----
    let therapyInterval = null;
    
    document.querySelectorAll('.therapy-play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.therapy-card');
            const type = btn.dataset.therapy;
            const isActive = card.classList.contains('active');
            
            stopAllAudio();
            
            if (!isActive) {
                currentMode = 'therapy';
                card.classList.add('active');
                
                let subset = [];
                if(type === 'stress') subset = ['guqin', 'sarangi', 'hand_drum'];
                if(type === 'focus') subset = ['mbira', 'gayageum', 'nyckelharpa'];
                if(type === 'sleep') subset = ['duduk', 'fiddle', 'crystal_baschet'];
                
                let currentIndex = 0;
                
                function crossfade() {
                    const currentId = subset[currentIndex];
                    const nextId = subset[(currentIndex + 1) % subset.length];
                    
                    const currentAudio = audioElements[currentId];
                    const nextAudio = audioElements[nextId];
                    
                    // Start next audio at 0 volume
                    nextAudio.volume = 0;
                    nextAudio.play();
                    
                    // 2 second crossfade
                    let step = 0;
                    const steps = 20; // 100ms per step = 2000ms
                    const fade = setInterval(() => {
                        step++;
                        const vol = step / steps;
                        if(currentAudio.volume - 1/steps >= 0) currentAudio.volume -= 1/steps;
                        nextAudio.volume = vol * 0.5; // max 50% volume for therapy
                        
                        if(step >= steps) {
                            clearInterval(fade);
                            currentAudio.pause();
                            currentAudio.currentTime = 0;
                        }
                    }, 100);
                    
                    currentIndex = (currentIndex + 1) % subset.length;
                }
                
                // Start first track immediately
                const firstAudio = audioElements[subset[0]];
                firstAudio.volume = 0.5;
                firstAudio.play();
                
                // Then crossfade every 45 seconds
                therapyInterval = setInterval(crossfade, 45000);
            }
        });
    });

    // ---- FEATURE 4: DNA VISUALIZER ----
    const dnaOverlay = document.getElementById('dna-visualizer');
    const dnaCanvas = document.getElementById('dna-chart');
    const ctx = dnaCanvas.getContext('2d');
    
    document.getElementById('dna-close').addEventListener('click', () => {
        dnaOverlay.classList.add('hidden');
    });

    function openDNAVisualizer(inst) {
        dnaOverlay.classList.remove('hidden');
        document.getElementById('dna-image').src = inst.image;
        
        // Tags
        const tagsContainer = document.getElementById('dna-tags');
        tagsContainer.innerHTML = '';
        inst.tags.forEach(t => {
            const span = document.createElement('span');
            span.className = 'dna-tag';
            span.textContent = t;
            tagsContainer.appendChild(span);
        });
        
        // Similar Instruments
        const similarContainer = document.getElementById('dna-similar');
        similarContainer.innerHTML = '';
        inst.similar.forEach(simId => {
            const simInst = instrumentsData.find(i => i.id === simId);
            const simCard = document.createElement('div');
            simCard.className = 'similar-card';
            simCard.style.backgroundImage = `url(${simInst.image})`;
            simCard.title = simInst.name;
            simCard.addEventListener('click', () => {
                openDNAVisualizer(simInst); // navigate
            });
            similarContainer.appendChild(simCard);
        });
        
        drawRadarChart(inst.stats);
    }
    
    function drawRadarChart(stats) {
        ctx.clearRect(0, 0, 400, 400);
        const centerX = 200, centerY = 200, maxRadius = 150;
        const labels = ['Tempo', 'Resonance', 'Complexity', 'Earthiness', 'Mystique'];
        const numAxes = 5;
        
        // Draw background web
        ctx.strokeStyle = 'rgba(201, 168, 76, 0.3)';
        ctx.lineWidth = 1;
        for(let j=1; j<=5; j++) {
            ctx.beginPath();
            for (let i = 0; i < numAxes; i++) {
                const angle = (Math.PI * 2 * i / numAxes) - Math.PI/2;
                const r = maxRadius * (j/5);
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }
        
        // Draw axes & labels
        ctx.fillStyle = '#e8d5a3';
        ctx.font = '14px Lora';
        ctx.textAlign = 'center';
        for (let i = 0; i < numAxes; i++) {
            const angle = (Math.PI * 2 * i / numAxes) - Math.PI/2;
            const x = centerX + maxRadius * Math.cos(angle);
            const y = centerY + maxRadius * Math.sin(angle);
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            // Labels
            const lx = centerX + (maxRadius + 20) * Math.cos(angle);
            const ly = centerY + (maxRadius + 20) * Math.sin(angle) + 5;
            ctx.fillText(labels[i], lx, ly);
        }
        
        // Animate Data Polygon
        let progress = 0;
        function animateData() {
            progress += 0.05;
            if(progress > 1) progress = 1;
            
            ctx.clearRect(0, 0, 400, 400); // Need to redraw everything if animating
            // To save performance for this demo, I will just draw it once without progress animation,
            // or I could redraw the web each frame. Let's just draw it directly.
        }
        
        ctx.beginPath();
        for (let i = 0; i < numAxes; i++) {
            const angle = (Math.PI * 2 * i / numAxes) - Math.PI/2;
            const val = stats[i] / 100;
            const r = maxRadius * val;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(201, 168, 76, 0.4)';
        ctx.fill();
        ctx.strokeStyle = '#c9a84c';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw points
        ctx.fillStyle = '#fff';
        for (let i = 0; i < numAxes; i++) {
            const angle = (Math.PI * 2 * i / numAxes) - Math.PI/2;
            const val = stats[i] / 100;
            const r = maxRadius * val;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI*2);
            ctx.fill();
        }
    }

    // ---- FEATURE 5: SOUNDSCAPE BUILDER ----
    const builderDrawer = document.getElementById('soundscape-builder');
    const slidersContainer = document.getElementById('volume-sliders');
    const nodesContainer = document.getElementById('orbit-nodes-container');
    
    document.getElementById('soundscape-toggle').addEventListener('click', () => builderDrawer.classList.remove('hidden'));
    document.getElementById('soundscape-close').addEventListener('click', () => builderDrawer.classList.add('hidden'));

    let soundscapeVolumes = {};
    let soundscapeMixPlaying = false;
    
    instrumentsData.forEach(inst => {
        soundscapeVolumes[inst.id] = 0;
        
        const row = document.createElement('div');
        row.className = 'slider-row';
        row.innerHTML = `
            <label>${inst.name}</label>
            <input type="range" min="0" max="100" value="0" data-id="${inst.id}">
        `;
        
        const slider = row.querySelector('input');
        slider.addEventListener('input', (e) => {
            const vol = e.target.value / 100;
            soundscapeVolumes[inst.id] = vol;
            if(soundscapeMixPlaying) {
                audioElements[inst.id].volume = vol;
                if(vol > 0 && audioElements[inst.id].paused) audioElements[inst.id].play();
                if(vol === 0 && !audioElements[inst.id].paused) audioElements[inst.id].pause();
            }
            updateOrbitalNodes();
        });
        
        slidersContainer.appendChild(row);
    });

    function playSoundscapeMix() {
        stopAllAudio();
        currentMode = 'soundscape';
        soundscapeMixPlaying = true;
        
        Object.keys(soundscapeVolumes).forEach(id => {
            const vol = soundscapeVolumes[id];
            if(vol > 0) {
                audioElements[id].volume = vol;
                audioElements[id].loop = true;
                audioElements[id].play();
            }
        });
    }

    function stopSoundscapeMix() {
        soundscapeMixPlaying = false;
        Object.keys(soundscapeVolumes).forEach(id => {
            audioElements[id].pause();
        });
    }

    document.getElementById('master-play-btn').addEventListener('click', playSoundscapeMix);
    document.getElementById('master-stop-btn').addEventListener('click', () => {
        stopSoundscapeMix();
        currentMode = 'idle';
    });

    function updateOrbitalNodes() {
        nodesContainer.innerHTML = '';
        const activeInsts = Object.keys(soundscapeVolumes).filter(id => soundscapeVolumes[id] > 0);
        
        activeInsts.forEach((id, index) => {
            const inst = instrumentsData.find(i => i.id === id);
            const vol = soundscapeVolumes[id];
            const node = document.createElement('div');
            node.className = 'orbit-node';
            
            // Visual attributes based on volume and index
            const size = 5 + (vol * 15);
            node.style.width = `${size}px`;
            node.style.height = `${size}px`;
            node.style.backgroundColor = inst.regionColor;
            node.style.color = inst.regionColor;
            
            // Animation
            const duration = 10 - (vol * 5); // Faster if louder
            const delay = -(index * 2);
            node.style.animation = `orbitAnim ${duration}s linear infinite ${delay}s`;
            
            // Dynamic Keyframes need a unique radius per node
            const radius = 60 + (index * 20);
            
            node.animate([
                { transform: `rotate(0deg) translateX(${radius}px) rotate(0deg)` },
                { transform: `rotate(360deg) translateX(${radius}px) rotate(-360deg)` }
            ], {
                duration: duration * 1000,
                iterations: Infinity,
                delay: delay * 1000
            });
            
            nodesContainer.appendChild(node);
        });
    }

    // Presets
    const defaultPresets = {
        forest_dawn: { guqin: 0.4, hand_drum: 0.4, kora: 0.4 },
        desert_night: { oud: 0.55, duduk: 0.55, sarangi: 0.55 }
    };
    
    function loadPreset(presetObj) {
        // Reset all
        Object.keys(soundscapeVolumes).forEach(id => {
            soundscapeVolumes[id] = presetObj[id] || 0;
            const slider = document.querySelector(`input[data-id="${id}"]`);
            if(slider) slider.value = soundscapeVolumes[id] * 100;
        });
        updateOrbitalNodes();
        if(soundscapeMixPlaying) playSoundscapeMix();
    }
    
    document.querySelectorAll('.preset-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const presetName = chip.dataset.preset;
            if(defaultPresets[presetName]) {
                loadPreset(defaultPresets[presetName]);
            } else {
                // Load from local storage
                const custom = JSON.parse(localStorage.getItem('echoes_presets')) || {};
                if(custom[presetName]) loadPreset(custom[presetName]);
            }
        });
    });
    
    // Load Custom Presets on Start
    function loadCustomPresetsUI() {
        const custom = JSON.parse(localStorage.getItem('echoes_presets')) || {};
        const container = document.getElementById('preset-chips');
        // Remove existing custom chips (if re-rendering)
        container.querySelectorAll('.custom-chip').forEach(c => c.remove());
        
        Object.keys(custom).forEach(name => {
            const btn = document.createElement('button');
            btn.className = 'preset-chip custom-chip';
            btn.dataset.preset = name;
            btn.textContent = name;
            btn.addEventListener('click', () => loadPreset(custom[name]));
            container.appendChild(btn);
        });
    }
    loadCustomPresetsUI();
    
    document.getElementById('save-preset-btn').addEventListener('click', () => {
        const name = document.getElementById('preset-name').value.trim();
        if(!name) return;
        
        const custom = JSON.parse(localStorage.getItem('echoes_presets')) || {};
        custom[name] = { ...soundscapeVolumes };
        localStorage.setItem('echoes_presets', JSON.stringify(custom));
        
        document.getElementById('preset-name').value = '';
        loadCustomPresetsUI();
    });

    // ---- Upload Instrument: fake curator login (frontend only), then upload overlay ----
    const uploadBtn = document.getElementById('upload-instrument-btn');
    const uploadLoginOverlay = document.getElementById('upload-login-overlay');
    const uploadLoginForm = document.getElementById('upload-login-form');
    const uploadLoginUser = document.getElementById('upload-login-user');
    const uploadLoginPass = document.getElementById('upload-login-pass');
    const uploadLoginError = document.getElementById('upload-login-error');
    const uploadLoginClose = document.getElementById('upload-login-close');
    const uploadLoginCancel = document.getElementById('upload-login-cancel');

    const uploadOverlay = document.getElementById('upload-overlay');
    const uploadClose = document.getElementById('upload-close');
    const uploadCancel = document.getElementById('upload-cancel');
    const uploadForm = document.getElementById('upload-form');
    const uploadImageInput = document.getElementById('upload-image');
    const uploadAudioInput = document.getElementById('upload-audio');
    const uploadDescInput = document.getElementById('upload-description');
    const uploadError = document.getElementById('upload-error');

    /** Hardcoded demo curators — no backend; matches are case-sensitive for password, ID trimmed & lowercased */
    const UPLOAD_CURATOR_ALLOWLIST = [
        { userId: 'curator', password: 'legitinstrument1' },
        { userId: 'sonic_museum', password: 'echoes2026' }
    ];

    function verifyCuratorCredentials(userId, password) {
        const id = String(userId || '').trim().toLowerCase();
        const pass = String(password || '');
        return UPLOAD_CURATOR_ALLOWLIST.some(
            (row) => row.userId.toLowerCase() === id && row.password === pass
        );
    }

    function openUploadLoginOverlay() {
        uploadLoginError.textContent = '';
        uploadLoginForm.reset();
        uploadLoginOverlay.classList.remove('hidden');
        uploadLoginOverlay.setAttribute('aria-hidden', 'false');
    }

    function closeUploadLoginOverlay() {
        uploadLoginOverlay.classList.add('hidden');
        uploadLoginOverlay.setAttribute('aria-hidden', 'true');
    }

    function openUploadOverlay() {
        uploadError.textContent = '';
        uploadForm.reset();
        uploadOverlay.classList.remove('hidden');
        uploadOverlay.setAttribute('aria-hidden', 'false');
    }

    function closeUploadOverlay() {
        uploadOverlay.classList.add('hidden');
        uploadOverlay.setAttribute('aria-hidden', 'true');
    }

    const MAX_IMAGE_MB = 15;
    const MAX_AUDIO_MB = 40;
    const mb = (bytes) => bytes / (1024 * 1024);

    function humanNameFromFile(file) {
        const name = (file && file.name) ? file.name : 'Instrument';
        return name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim() || 'Instrument';
    }

    uploadBtn.addEventListener('click', openUploadLoginOverlay);
    uploadLoginClose.addEventListener('click', closeUploadLoginOverlay);
    uploadLoginCancel.addEventListener('click', closeUploadLoginOverlay);
    uploadLoginOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay-backdrop')) closeUploadLoginOverlay();
    });
    uploadLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        uploadLoginError.textContent = '';
        const ok = verifyCuratorCredentials(uploadLoginUser.value, uploadLoginPass.value);
        if (!ok) {
            uploadLoginError.textContent = 'Curator ID or password not recognized. Only verified curators may upload.';
            return;
        }
        closeUploadLoginOverlay();
        openUploadOverlay();
    });

    uploadClose.addEventListener('click', closeUploadOverlay);
    uploadCancel.addEventListener('click', closeUploadOverlay);
    uploadOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay-backdrop')) closeUploadOverlay();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!uploadLoginOverlay.classList.contains('hidden')) {
            closeUploadLoginOverlay();
            return;
        }
        if (!uploadOverlay.classList.contains('hidden')) closeUploadOverlay();
    });

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        uploadError.textContent = '';

        const imageFile = uploadImageInput.files && uploadImageInput.files[0];
        const audioFile = uploadAudioInput.files && uploadAudioInput.files[0];
        const description = uploadDescInput.value.trim();

        if (!imageFile || !audioFile || !description) {
            uploadError.textContent = 'Please provide an image, an audio file, and a description.';
            return;
        }

        try {
            if (mb(imageFile.size) > MAX_IMAGE_MB) {
                uploadError.textContent = `Image is too large. Please use an image under ${MAX_IMAGE_MB}MB.`;
                return;
            }
            if (mb(audioFile.size) > MAX_AUDIO_MB) {
                uploadError.textContent = `Audio is too large. Please use an audio file under ${MAX_AUDIO_MB}MB.`;
                return;
            }

            const id = `user_${Date.now()}`;
            const record = {
                ...userInstrumentDefaults,
                id,
                name: humanNameFromFile(audioFile),
                description,
                imageBlob: imageFile,
                audioBlob: audioFile
            };

            await idbPutUpload(record);
            const inst = attachObjectUrls(record);
            userInstruments.push(inst);

            buildInstrumentCard(inst, instrumentsData.length + userInstruments.length - 1, { enableDNA: false });
            closeUploadOverlay();
        } catch (err) {
            uploadError.textContent = 'Upload failed. Please try again (or use smaller files).';
        }
    });

    // Cleanup object URLs on page unload
    window.addEventListener('beforeunload', () => {
        userInstruments.forEach(revokeObjectUrls);
    });
});
