export const useFile = (filePath: string) => {
    return  `${import.meta.env.BASE_URL}/${filePath}`;
}