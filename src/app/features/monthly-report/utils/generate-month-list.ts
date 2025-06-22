export const generateMonthList = (count: number): string[] => {
    const list: string[] = [];
    const now = new Date();
  
    for (let i = 0; i < count; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      list.push(`${year}-${month}`);
    }
  
    return list;
  };
  