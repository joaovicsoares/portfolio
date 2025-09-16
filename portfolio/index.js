document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        const form = document.querySelector('.contact-form');
        const formMessage = document.querySelector(".formMessage");
        const loading = document.querySelector(".loading");
        const spinner = document.querySelector(".spinner");
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            loading.classList.remove("hidden");
            spinner.classList.remove("hidden");
            const formData = {
                name: form.querySelector("[name='name']"),value,
                email: form.querySelector("[name='email']").value,
                subject: form.querySelector("[name='subject']").value,
                message: form.querySelector("[name='message']").value
            };
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                if (response.ok && data.success) {
                    formMessage.innerHTML = "✅ Email enviado com sucesso!";
                } else {
                    formMessage.innerHTML = "❌ Ocorreu um erro, tente novamente."
                }
            } catch (error) {
                formMessage.innerHTML = "⚠️ Erro de conexão. Tente mais tarde.";
            }
            this.reset();
        });

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const speed = scrolled * 0.5;
            heroContent.style.transform = `translateY(${speed}px)`;
        });