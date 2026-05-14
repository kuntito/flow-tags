interface AddTagToSongSuccess {
    success: true
}

interface AddTagToSongFailure {
    success: false;
    debug: object;
}

export type AddTagToSongResponse =
    | AddTagToSongSuccess
    | AddTagToSongFailure;