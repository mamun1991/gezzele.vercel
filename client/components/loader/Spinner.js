import { ScaleLoader } from 'react-spinners';

export default function Spinner() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <ScaleLoader color="#2DB6D4" />
        </div>
    );
}