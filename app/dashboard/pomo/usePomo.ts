'use client';

import { useState, useRef, useEffect, MutableRefObject } from 'react';
import useDesktopNotification, {
  notifyMe,
} from '@/components/hooks/useDesktopNotification';
import { setPageTitle } from '@/lib/utils';

export type Session = {
  id: number;
  name: 'Focus Session' | 'Short Break' | 'Long Break';
  minutes: number;
};

export const sessions: readonly [Session, Session, Session] = [
  {
    id: 0,
    name: 'Focus Session',
    minutes: 25,
  },
  {
    id: 1,
    name: 'Short Break',
    minutes: 5,
  },
  {
    id: 2,
    name: 'Long Break',
    minutes: 10,
  },
];

export type TimeLeft = { minutes: number; seconds: number };

export function formatTime(timeLeft: TimeLeft): string {
  const { minutes, seconds } = timeLeft;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

export function isTimeOver(timeLeft: TimeLeft): boolean {
  return timeLeft.minutes === 0 && timeLeft.seconds === 0;
}

function decrementOneSecond(timeLeft: TimeLeft): TimeLeft {
  if (timeLeft.minutes === 0 && timeLeft.seconds === 0) return timeLeft;
  let { minutes, seconds } = timeLeft;
  if (seconds === 0) {
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }
  return { minutes, seconds };
}

export default function usePomo() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: sessions[0].minutes,
    seconds: 0,
  } as TimeLeft);
  const sessionRef = useRef(sessions[0]);
  const alarmRef: MutableRefObject<HTMLAudioElement | null> = useRef(null);
  const intervalId: MutableRefObject<NodeJS.Timeout | null> = useRef(null);
  useDesktopNotification();

  useEffect(() => {
    const initAlarm = () => {
      const alarmAudio = new Audio('/sounds/uplifting_bell2.wav');
      alarmRef.current = alarmAudio;
    };
    initAlarm();
  }, []);

  useEffect(() => {
    function onTick() {
      if (isTimeOver(timeLeft)) {
        const onTimeOver = () => {
          stopTimer();
          alarmRef.current?.play();
          setPageTitle('Buzzzzzzz!');
          notifyMe({
            title: 'Pomo time up',
            body: `Congrats! Your ${
              sessionRef.current.minutes
            } minute ${sessionRef.current.name.toLocaleLowerCase()} is over!`,
          });
        };
        onTimeOver();
      } else if (timeLeft.minutes !== sessionRef.current.minutes) {
        setPageTitle(`(${formatTime(timeLeft)}) Pomodoro Timer`);
      }
    }
    onTick();
  }, [timeLeft]);

  const startTimer = (forcedStart = false) => {
    if (!forcedStart) {
      if (isTimeOver(timeLeft)) return;
    }
    if (intervalId.current) return;
    intervalId.current = setInterval(() => {
      setTimeLeft((prev) => decrementOneSecond(prev));
    }, 1000);
  };

  const stopTimer = () => {
    if (!intervalId.current) return;
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeLeft({ minutes: sessionRef.current.minutes, seconds: 0 });
    setPageTitle('Pomodoro Timer');
  };

  const onSessionChange = (session: Session) => {
    sessionRef.current = sessions[session.id];
    setTimeLeft({ minutes: session.minutes, seconds: 0 });
    startTimer(true);
  };

  return {
    timeLeft,
    onSessionChange,
    startTimer,
    stopTimer,
    resetTimer,
  };
}
