export default function StatesDemo() {
  return (
    <div className="space-y-3 *:border">
      <h3>预设 supports-grid 浏览器支持 grid 属性</h3>
      <div className="supports-grid grid grid-cols-5 gap-4 *:border">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>

      <h3>supports-[display:grid] 浏览器支持 grid 属性</h3>
      <div className="supports-[display:grid] grid grid-cols-5 gap-4 *:border">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>

      <form className="group" data-state="disabled">
        <input className="border border-green-500 bg-transparent" type="text" />
        <button
          className="border border-green-500 bg-transparent group-[data-state=disabled]:opacity-80"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
