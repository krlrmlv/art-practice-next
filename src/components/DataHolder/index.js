'use server';

export async function DataHolder() {
 
    await saveToDatabase(newData);
    
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}
