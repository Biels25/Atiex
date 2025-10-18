import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.img
        src="/faction_symbols.png"
        alt="Símbolos das Facções"
        style={{ width: '150px', marginBottom: '20px', filter: 'invert(0.8)' }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        O Teste de Aptidão
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Em um mundo redefinido pela tecnologia, sua natureza define sua função. A simulação irá revelar a qual grupo você pertence.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        Sua mente anseia pela lógica da Erudição (ADS), pela coragem na ação da Audácia (Mecatrônica), ou pela harmonia da Amizade (Comunidade)? Descubra seu lugar.
      </motion.p>
      
      <Link to="/quiz">
        <motion.button
          className="start-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar Simulação
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;