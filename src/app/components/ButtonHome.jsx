export default function ButtonHome({ color={} }) {
    return (
        <button
        onClick={() => window.location.href = "/"}
        className={`z-3 fixed bottom-0 flex justify-start p-3 w-[80px] text-center ${color}`}
        >
            Volver
        </button>
    );
    }