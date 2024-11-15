const Login = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl p-4 m-4">Enter your GitHub username</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2 rounded-lg" />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
           
        </div>
    )
}

export default Login;