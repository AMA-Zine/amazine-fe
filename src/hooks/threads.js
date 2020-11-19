import { useState, useEffect } from 'react';
import { getThreads, getThreadById } from '../services/thread-api';

export const useThreads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads()
      .then(fetchedThreads => setThreads(fetchedThreads));
  }, []);

  return {
    threads
  };
};

export const useThreadById = (id) => {
  const [thread, setThread] = useState([]);

  useEffect(() => {
    getThreadById(id)
      .then(fetchedThread => setThread(fetchedThread));
  }, [id]);

  return {
    thread
  };
};
