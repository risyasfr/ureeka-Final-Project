export default function InsightsPage() {
  return (
    <main className="p-4 sm:p-8">
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Emotional Tracking - Insights</h1>
        </div>

        {/* Weekly Emotional Snapshots */}
        <div className="bg-[#CDE4D6] p-6 rounded-2xl mb-8">
          <h3 className="text-lg font-extrabold text-gray-800 mb-6 text-center md:text-left">
            Weekly Emotional Snapshots
          </h3>
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
            {/* Weekly Emojis */}
            <div className="flex flex-row justify-between items-center gap-2 flex-1">
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Overwhelmed</span>
                    <span className="text-2xs text-[#000000]">Mon</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Worried</span>
                    <span className="text-2xs text-[#000000]">Tue</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Low</span>
                    <span className="text-2xs text-[#000000]">Wed</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Tired</span>
                    <span className="text-2xs text-[#000000]">Thu</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Calm</span>
                    <span className="text-2xs text-[#000000]">Fri</span>
                </div> 
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Happy</span>
                    <span className="text-2xs text-[#000000]">Sat</span> 
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">😩</span>
                    <span className="text-xs text-gray-800 mb-1">Worried</span>
                    <span className="text-2xs text-[#000000]">Sun</span>
                </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:flex w-px bg-[#AABFA5]"></div>
                
            {/* Insights Block */}
            <div className="flex flex-col flex-1 items-center text-center">
              <span className="text-5xl mb-2">😟</span>
              <div>
                <p className="font-semibold text-[#000000]">You mostly felt worried this week</p>
                <p className="text-sm text-[#000000]">
                  It seems that you have logged in worried 2 times this week. Try to find time to breathe or talk to a friend?
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom: Energy/Stress Overview, Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Energy/Stress Overview */}
            <div className="bg-[#EAC4D5] p-6 rounded-2xl">
                <h3 className="text-lg font-extrabold text-gray-800 mb-6 text-center md:text-left">Stress & Energy Overview</h3>
                {/* Energy Bar */}
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <span className="text-sm text-gray-600 mr-2">Energy</span>
                        <div className="flex-1 h-3 bg-[#FFFFFF] rounded-full">
                            <div className="h-3 bg-[#CF779F] rounded-full" style={{ width: "60%" }}></div>
                        </div>
                    </div>
                </div>
                {/* Most Frequent Stress Triggers */}
                <div className="mb-2">
                  <h4 className="font-semibold text-[#000000] text-base">Most Frequent Stress Trigger</h4>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <ul className="text-sm text-[#000000] list-disc ml-4 mr-3">
                    <li>Deadlines</li>
                    <li>Lack of Sleep</li>
                    <li>Presentation Panic</li>
                    <li>Social Fatigue</li>
                    <li>Many Assignments</li>
                  </ul>
                  {/* Pie chart placeholder */}
                  <div className="flex flex-1 justify-end">
                    <div className="w-24 h-24 rounded-full bg-pink-200 flex mr-15 items-center justify-center text-xs text-gray-500">
                      Pie Chart
                    </div>
                  </div>
                </div>
                {/* Suggestions */}
                <div className="mt-4 mb-3">
                    <h4 className="font-semibold text-[#000000] text-base mb-2">Suggestions</h4>
                    <p className="text-sm text-[#000000] text-justify">
                    You’ve mentioned ‘Deadlines’ and ‘Lack of Sleep’ 4 times this week. No wonder you feel worried, overwhelmed, and tired! Try breaking your assignments into smaller chunks and reward yourself for each one you complete.
                    </p>
                </div>
            </div>

            {/* Highlights */}
            <div className ="bg-[#FCE8DB] p-6 rounded-2xl">
                <h3 className="text-lg font-extrabold text-gray-800 mb-6 text-center md:text-left">Highlights</h3>
                <ul className="list-disc ml-5 text-sm text-[#000000] mb-4">
                    <li className="mb-1">Checked in 7 days in a row</li>
                    <li className="mb-1">Slept more than 6 hours 3 times</li>
                    <li className="mb-1">Successfully completed 3 micro-therapy sessions</li>
                    <li className="mb-1">Noticed feelings of anxiety and labeled them appropriately</li>
                    <li className="mb-1">Wrote 1 honest reflection about feeling overwhelmed</li>
                </ul>

                { /* Quotes */}
                <div>
                    <h6 className="italic font-semibold text-[#000000] text-base text-center mb-2">“Small steps count. You’ve walked, that’s what’s important.”</h6>
                </div>
            </div>
        </div>
    </main>
  );
}