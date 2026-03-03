function Filters() {
    return (
        <div className="flex flex-row justify-between border-2 mt-5 rounded-2xl px-4 h-32 lg:hidden">
            <div className="flex flex-col items-center">
                <div className="h-25 w-25 rounded-full overflow-hidden mt-3">
                    <img src="/books.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <h3>Books</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-25 w-25 rounded-full overflow-hidden mt-3">
                    <img src="/stationary.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <h3>Stationary</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-25 w-25 rounded-full overflow-hidden mt-3">
                    <img src="/electronics.avif" alt="" className="w-full h-full object-cover" />
                </div>
                <h3>Electronics</h3>
            </div>
        </div>
    )
}
export default Filters