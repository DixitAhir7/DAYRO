// how much time has spend in website

export function userTime() {
    const oldStart = localStorage.getItem("startTime");

    if (oldStart) {
        const previousTime = Number(oldStart);
        const now = Date.now();
        const timeSpent = now - previousTime;
        const timeSec = Math.floor(timeSpent / 1000);
        const timeMin = Math.floor(timeSec / 60);

        console.log(`You spent ${timeMin} minutes`);

        localStorage.removeItem("startTime");
    }
    localStorage.setItem("startTime", Date.now());
}
