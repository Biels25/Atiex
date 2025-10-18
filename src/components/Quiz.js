import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions as allQuestions } from '../questions';
import { motion, AnimatePresence } from 'framer-motion';

const getShuffledQuestions = (numQuestions) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
};

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({ ads: 0, mecatronica: 0, outros: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(getShuffledQuestions(4));
    }, []);

    const selectAnswer = (value) => {
        setScores(prevScores => ({ ...prevScores, [value]: prevScores[value] + 1 }));
        
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setTimeout(() => {
                navigate('/results', { state: { scores } });
            }, 600); // Aumentar um pouco o delay para a transição de saída
        }
    };

    if (questions.length === 0) {
        return (
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Iniciando a Simulação de Aptidão...
                </motion.h1>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="container quiz-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} // Animação mais longa e suave
                >
                    {/* Removendo o número da pergunta para menos "cara de quiz" */}
                    <h2 id="question-title">{currentQuestion.question}</h2>
                    <div id="answers-container">
                        {currentQuestion.answers.map((answer, index) => (
                            <motion.button
                                key={index}
                                className="answer-btn"
                                onClick={() => selectAnswer(answer.value)}
                                whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)" }}
                                whileTap={{ scale: 0.97 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.4 }} // Animação sequencial para as respostas
                            >
                                {answer.text}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Quiz;