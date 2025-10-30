import React from 'react'

function AdminDasboard() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-cyan-500 mb-4">
                    Welcome, Admin 👋
                </h1>
                <p className="text-gray-700 text-lg">
                    This is your admin dashboard. You can manage destinations, users, and more here.
                </p>
            </div>
        </>
    )
}

export default AdminDasboard