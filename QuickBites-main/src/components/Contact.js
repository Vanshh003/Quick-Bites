const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="Concern"/>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
            {/* <h2>Contact the team at QuickBytes@gmail.com</h2> */}
        </div>
    )
}

export default Contact