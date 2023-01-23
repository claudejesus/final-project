import React, { Component } from 'react';
import ReportContent from './ReportContent';
import "../adminPage/AllDetails.css"
class MidleReport extends Component {
    render() {
        return (
            <div className="report--container">
                {/* This is report to be printed and must be in class   */}
                {/* We render this component secondary bcz class can't works with useEffect */}
                <ReportContent/>
            </div>
        );
    }
}

export default MidleReport;