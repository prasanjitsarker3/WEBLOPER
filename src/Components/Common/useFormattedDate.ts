// useFormattedDate.ts
import { useState, useEffect } from "react";

const useFormattedDate = (date: string | number | Date): string | null => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const formatDate = (date: string | number | Date): string => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
    };

    setFormattedDate(formatDate(date));
  }, [date]);

  return formattedDate;
};

export default useFormattedDate;
