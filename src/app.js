import { livrosRouter } from "./routes/livros.route.js";
import { leitoresRouter } from "./routes/leitores.route.js";
import { emprestimosRouter } from "./routes/emprestimos.route.js";

const app = express();

app.use(express.json());

app.use("/", livrosRouter);
app.use("/", leitoresRouter);
app.use("/", emprestimosRouter);

export { app };
