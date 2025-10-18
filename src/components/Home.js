import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions as allQuestions } from '../questions'; // Apenas uma importação
import { motion, AnimatePresence } from 'framer-motion';

// Função para embaralhar o array e pegar um número de perguntas
const getShuffledQuestions = (numQuestions) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
};

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({ ads: 0, mecatronica: 0, outros: 0 });
    const navigate = useNavigate();

    // Inicia o quiz com um conjunto aleatório de 4 perguntas
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
            }, 500);
        }
    };

    if (questions.length === 0) {
        return <div className="container"><h1>Carregando cenário de simulação...</h1></div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="container quiz-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 id="question-title">{currentQuestion.question}</h2>
                    <div id="answers-container">
                        {currentQuestion.answers.map((answer, index) => (
                            <motion.button
                                key={index}
                                className="answer-btn"
                                onClick={() => selectAnswer(answer.value)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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