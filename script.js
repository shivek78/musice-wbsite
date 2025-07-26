// YouTube Integration
function connectYouTube() {
    alert("YouTube connected! ✅ You can now import your playlists.");
}

function importPlaylist() {
    const videoId = prompt("Enter a YouTube video ID or full URL:");
    if (videoId) {
        const id = extractVideoId(videoId);
        if (id) {
            document.getElementById('youtubeFrame').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
            document.getElementById('youtubePlayer').style.display = 'block';
            document.getElementById('currentTrack').textContent = "Playing YouTube Video";
            document.getElementById('currentArtist').textContent = "YouTube";
        } else {
            alert("Invalid YouTube link or ID.");
        }
    }
}

function extractVideoId(url) {
    try {
        let match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
        return match ? match[1] : url;
    } catch {
        return null;
    }
}

function closePlayer() {
    document.getElementById('youtubeFrame').src = '';
    document.getElementById('youtubePlayer').style.display = 'none';
}

// Share Modal Logic
function openShareModal(playlistName) {
    document.getElementById('playlistName').textContent = playlistName;
    document.getElementById('shareModal').style.display = 'flex';
}

function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
}

function copyLink() {
    const text = `https://musica.com/playlist/${encodeURIComponent(document.getElementById('playlistName').textContent)}`;
    navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard!");
    });
}

function shareToInstagram() {
    alert("Redirecting to Instagram... (Mock)");
}

function shareToTikTok() {
    alert("Redirecting to TikTok... (Mock)");
}

function shareToTwitter() {
    alert("Tweet shared successfully! (Mock)");
}

function shareToDiscord() {
    alert("Shared to your Discord server! (Mock)");
}

// Playlist Sharing (Optional console log or enhancement)
function sharePlaylist(name) {
    console.log(`Playlist "${name}" selected for sharing.`);
}

// Mini Player
let isPlaying = true;

function togglePlay() {
    isPlaying = !isPlaying;
    document.getElementById('playBtn').textContent = isPlaying ? '⏸' : '▶';
}

function showMiniPlayer() {
    document.getElementById('miniPlayer').style.display = 'flex';
}

function previousTrack() {
    alert("Previous Track (Mock)");
}

function nextTrack() {
    alert("Next Track (Mock)");
}

// Optional: Animate features on scroll
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
});
