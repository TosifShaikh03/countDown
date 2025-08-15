 const examDate = new Date('2026-05-03');

        function updateCountdown() {
            const now = new Date();
            const diff = examDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById('countdown').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
