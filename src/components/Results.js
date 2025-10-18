import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = () => {
    const location = useLocation();
    const { scores } = location.state || { scores: { ads: 0, mecatronica: 0, outros: 0 } };

    const courseDetails = {
        ads: {
            aptitude: "Erudição",
            course: "Análise e Desenvolvimento de Sistemas",
            description: "Você valoriza o conhecimento e a lógica acima de tudo. Sua mente é sua maior arma, capaz de decifrar sistemas complexos e usar a informação para moldar o futuro. Seu lugar é com a Erudição.",
            color: "var(--color-erudicao)" // Usando a variável CSS
        },
        mecatronica: {
            aptitude: "Audácia",
            course: "Mecatrônica",
            description: "Você enfrenta o perigo de frente e não teme desafios práticos. Sua coragem se manifesta na ação, na construção e na defesa dos outros. Sua aptidão está na linha de frente, com a Audácia.",
            color: "var(--color-audacia)" // Usando a variável CSS
        },
        outros: {
            aptitude: "Amizade",
            course: "Comunidade e Liderança",
            description: "Seu maior valor está nas pessoas. Você acredita na paz, na empatia e no serviço. Seu propósito é fortalecer os laços da comunidade e garantir o bem-estar de todos. Você pertence à Amizade.",
            color: "var(--color-amizade)" // Usando a variável CSS
        },
        indefinido: {
            aptitude: "Divergente",
            course: "Indefinido",
            description: "Sua simulação foi inconclusiva. Você não se encaixa em uma única facção. Sua mente se adapta a diferentes desafios, tornando-o imprevisível e perigoso para o sistema. Você é um Divergente.",
            color: "var(--color-divergente)" // Usando a variável CSS
        }
    };
    
    let maxScore = 0;
    for (const course in scores) {
        if (scores[course] > maxScore) {
            maxScore = scores[course];
        }
    }
    const topCourses = [];
    for (const course in scores) {
        if (scores[course] === maxScore) {
            topCourses.push(course);
        }
    }
    const resultCourse = topCourses.length > 1 ? 'indefinido' : topCourses[0];
    const details = courseDetails[resultCourse];

    const totalScores = scores.ads + scores.mecatronica + scores.outros;

    const data = {
        labels: [
            `Erudição (${Math.round((scores.ads / totalScores) * 100) || 0}%)`,
            `Audácia (${Math.round((scores.mecatronica / totalScores) * 100) || 0}%)`,
            `Amizade (${Math.round((scores.outros / totalScores) * 100) || 0}%)`
        ],
        datasets: [{
            data: [scores.ads, scores.mecatronica, scores.outros],
            backgroundColor: [
                courseDetails.ads.color,
                courseDetails.mecatronica.color,
                courseDetails.outros.color
            ],
            borderColor: '#1a1a2e',
            borderWidth: 4,
            hoverOffset: 20,
            hoverBorderColor: '#fff'
        }]
    };

    const options = {
        responsive: true,
        cutout: '70%',
        animation: {
            animateScale: true,
            animateRotate: true
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#e0e0e0',
                    font: {
                        family: "'Roboto', sans-serif"
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        const score = context.parsed;
                        // Ajusta o label do tooltip para mostrar o nome da facção e a pontuação
                        const factionName = context.label.split('(')[0].trim();
                        return `${factionName}: ${score} pontos`;
                    }
                }
            }
        }
    };

    return (
        <motion.div
            className="container result-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h1>Resultado da Simulação:</h1>
            <h2 style={{ color: details.color }}>{details.aptitude}</h2>
            <p className="course-subtitle">Sua facção correspondente:</p>
            <motion.h3
                id="result-final-course"
                style={{ color: details.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {details.course}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                {details.description}
            </motion.p>
            <hr />
            <motion.h3
                className="result-section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                Seu Perfil de Aptidão
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
            >
                A simulação analisou sua afinidade com cada facção:
            </motion.p>
            <motion.div
                className="chart-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            >
                <Doughnut data={data} options={options} />
            </motion.div>
            <Link to="/">
                <motion.button
                    className="start-button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Refazer a Simulação
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Results;