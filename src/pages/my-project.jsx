import ProjectTable from "../components/MyProject/table";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const MyProjectPage = () => {
  return (
    <div className="space-y-5">
      <div className="text-3xl font-semibold">Dự án của tôi</div>
      <ProjectTable />
    </div>
  );
};

export default MyProjectPage;
