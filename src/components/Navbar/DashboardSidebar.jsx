import React from 'react';

/**
 * DashboardSidebar component provides a sidebar for the dashboard.
 *
 * @component
 * @example
 * // Example usage of DashboardSidebar
 * <DashboardSidebar />
 *
 * @returns {JSX.Element} - Rendered component.
 */
const DashboardSidebar = () => {
    return (
        // Wrapper div with padding
        <div className='p-5'>
            {/* Text content for the sidebar */}
            <p>Dashboard Sidebar</p>
        </div>
    );
};


// Exporting the DashboardSidebar component as the default export
export default DashboardSidebar;