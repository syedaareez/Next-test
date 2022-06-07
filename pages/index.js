import List from "../components/list";


export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[1fr_8fr_1fr] h-screen">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl text-center">Welcome to <span className="text-red-800">TEST</span>!</h1>
        </div>

        
        <List />
        
        
        
        <div className= "flex items-center justify-center">
          <p className= "text-xl font-semibold">Powered by <span className="font-bold">Aareez</span></p>
        </div>
      </div>
    </>
  )
}
