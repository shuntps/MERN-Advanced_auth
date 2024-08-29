import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-sky-900">
      {/* Simple Loading Spinner */}
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-t-4 border-blue-200 border-t-blue-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
