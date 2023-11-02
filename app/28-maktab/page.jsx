import Filter from "../../components/Filter"

const getTopics = async () => {

    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/pupils`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};


export default async function TopicsList() {
    const a = await getTopics()
    const mavzula = a?.mavzula
    const maktablar = Array.from({ length: 54, }, (_, index) => index + 1);


    return (
        <>
            <div className="container">
                <Filter />
            </div >
        </>
    );
}