export default function StockOrder() {
    return (
        <div className="">
            <form action="post" className="grid grid-cols-10 gap-0">
                <div className="bg-blue-300 text-center">Part #</div>
                <div className="bg-blue-300 text-center">Order Qty</div>
                <div className="bg-blue-300 text-center">Line Code</div>
                <div className="bg-blue-300 text-center">Brand Img</div>
                <div className="bg-blue-300 text-center">Item Name</div>
                <div className="bg-blue-300 text-center">Price</div>
                <div className="bg-blue-300 text-center">List Price</div>
                <div className="bg-blue-300 text-center">Core Price</div>
                <div className="bg-blue-300 text-center">Avl</div>
                <div className="bg-blue-300 text-center">Action</div>

                <input type="number" />
                <input type="text" />
            </form>
        </div>
    )
}