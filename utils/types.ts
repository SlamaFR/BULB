export const isBranch = (element: LineElement): element is Branch => '$branch' in element
export const isFork = (element: LineElement): element is Fork => '$fork' in element
export const isLoop = (element: LineElement): element is Loop => '$loop' in element
export const isParallelBranches = (element: LineElement): element is ParallelBranches => '$parallelBranches' in element

export const isMode = (connection: Connection): connection is ModeConnection => '$modeConnection' in connection
export const isService = (connection: Connection): connection is ServiceConnection => '$serviceConnection' in connection

export const isAirport = (ornament: Ornament): ornament is AirportOrnament => '$airportOrnament' in ornament
export const isText = (ornament: Ornament): ornament is TextOrnament => '$textOrnament' in ornament
