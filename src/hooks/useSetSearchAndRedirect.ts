import { useNavigate } from "react-router-dom";

export default function useSetSearchAndRedirect() {
    const navigate = useNavigate();
    return (value: string) => navigate(`/search?q=${encodeURIComponent(value)}&page=${encodeURIComponent(1)}`);
}