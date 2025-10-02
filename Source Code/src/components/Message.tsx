import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          hi. we have known each other for a long time now. i really enjoyed spending my time at school with you.
          you have been my friend the longest, for as long as i can remember. there's been bullshit here and there,
          probably more to come. however, today is your special day and i want you to enjoy. If u dont enjoy today, so be it.
          you can enjoy the rest of your life. even if that is not possible, let it be so. At least you can hope for it, and hope 
          is a powerful thing. But all of it does not matter today. what matters is that it is your birthday today and you need to enjoy
          it.

          P.S: Hope you grow taller and arent blind without your glasses.

        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday
        </p>
      </motion.div>
    </div>
  );
};

export default Message;