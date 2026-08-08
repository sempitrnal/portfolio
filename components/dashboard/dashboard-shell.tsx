"use client";

import { Sidebar } from "./sidebar";
import { Dashboard } from "./dashboard";

export function DashboardShell() {
  return (
    <div className="min-h-screen bg-background md:pl-64">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <Dashboard />
      </main>
    </div>
  );
}
