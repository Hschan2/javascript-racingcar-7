export default function determineWinners(carStatuses) {
    const maxProgress = Math.max(...carStatuses.map(({ progress }) => progress.length));
    return carStatuses
        .filter(({ progress }) => progress.length === maxProgress)
        .map(({ name }) => name);
}