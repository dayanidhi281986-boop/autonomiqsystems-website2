export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Autonomiq Systems Portal</h1>
        <p className="text-gray-500">Welcome to the enterprise employee hub.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-xl mb-2">Attendance</h2>
          <p className="text-sm text-gray-600">Clock in/out and view history.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-xl mb-2">Leave Management</h2>
          <p className="text-sm text-gray-600">Request leave and track approvals.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-xl mb-2">Payroll</h2>
          <p className="text-sm text-gray-600">Secure access to payslips and tax.</p>
        </div>
      </div>
    </div>
  );
}
