import router from "express"
import 'dotenv/config';
import axios from "axios"
const jobRouter = router();



const FINDWORK_API_URL = 'https://findwork.dev/api/jobs/';
const FINDWORK_API_TOKEN = process.env.FINDWORK_TOKEN


jobRouter.get('/job', async (req, res) => {
    const { location, search } = req.query;

    try {
        const response = await axios.get(FINDWORK_API_URL, {
            headers: {
                Authorization: `Token ${FINDWORK_API_TOKEN}`,
            },
            params: {
                location,
                search,
                sort_by: 'relevance',
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

export default jobRouter