import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Skull } from 'lucide-react';

const CountdownApp = () => {
  const [count, setCount] = useState(10);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowFinalMessage(true);
      // Show popup after a brief delay
      setTimeout(() => setShowPopup(true), 500);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-8 text-white">
              System Processing...
            </h1>
            
            {!showFinalMessage ? (
              <div className="mb-8">
                <div className="text-6xl font-bold text-blue-500 animate-pulse">
                  {count}
                </div>
                <p className="text-gray-400 mt-4">
                  Please wait while we verify your system...
                </p>
              </div>
            ) : (
              <div className="text-red-500 text-3xl font-bold animate-bounce">
                YOU HAVE BEEN HACKED! 
                <Skull className="inline ml-2 animate-spin" size={32} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showPopup} onOpenChange={setShowPopup}>
        <AlertDialogContent className="bg-black border-red-500 border-2">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-500 text-2xl text-center animate-pulse">
              🚨 SYSTEM COMPROMISED 🚨
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center space-y-4">
              <p className="text-white text-lg">All your files are now encrypted!</p>
              <p className="text-green-400 font-mono">
                Just kidding! This is a harmless prank. 😄
              </p>
              <div className="text-sm text-gray-400">
                Love, your friend ❤️
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CountdownApp;
