import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

const DashboardLayout = ({children}: any) => {
    return(
        <div className="flex flex-col w-full">
            <Navbar />

            <div className="flex gap-2">
                <Sidebar />

                <main className="w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;