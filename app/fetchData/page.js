import styles from "./fetchData.module.css";

export default async function fetchData() {
  const data = await import("../data/db.json");

  JSON.stringify(data.default, null, 2);

  console.log(data.default);
  return (
    <div className={styles.fetchData}>
      <h1 className="flex justify-center items-center text-center mx-auto pl-60 mt-30 mb-10">
        Fetch Data
      </h1>
      <div className="flex flex-col justify-left items-center bg-white dark:bg-blue-900 text-[8px] min-w-3xs pl-40 mx-auto w-80 h-dvh sm:md:lg:xl:2xl:h-dvh sm:flex-col sm:justify-center sm:w-auto sm:pl-20 sm:text-sm md:flex-col md:pl-60 md:w-180 md:justify-center-safe md:items-center md:text-[18px] md:mt-0 md:pt-0 lg:flex-col lg:pl-80 lg:justify-center-safe lg:items-center lg:w-250 lg:text-lg xl:flex-col xl:justify-center-safe xl:items-center xl:pl-30 xl:w-5xl xl:text-xl 2xl:flex-col 2xl:pl-40 2xl:justify-center 2xl:items-center 2xl:w-400 2xl:text-2xl ">
        <table border="1" cellPadding="15">
          <thead>
            <tr>
              <th className="text-[12px] w-80 text-center whitespace-pre px-3 mb-2 lg:px-14 lg:mx-14 lg:py-3 md:text-xl sm: text-sm md:px-10 md:mx-10 md:py-2 sm:px-3 sm:mx-3 sm:py-0.5 ">
                Name
              </th>
              <th className="text-[12px] w-80 text-center whitespace-pre px-4 mb-2 lg:px-14 lg:mx-14 lg:py-3  md:text-xl sm: text-sm md:px-10 md:mx-10 md:py-2 sm:px-3 sm:mx-3 sm:py-0.5">
                Email
              </th>
              <th className="text-[12px] w-80 text-center whitespace-pre px-3 mb-2 lg:px-14 lg:mx-14 lg:py-3  md:text-xl sm: text-sm md:px-10 md:mx-10 md:py-2 sm:px-3 sm:mx-3 sm:py-0.5">
                Website
              </th>
              <th className="text-[12px] w-80 text-center whitespace-pre px-3 mb-2 lg:px-14 lg:mx-14 lg:py-3  md:text-xl sm: text-sm md:px-10 md:mx-10 md:py-2 sm:px-3 sm:mx-3 sm:py-0.5">
                Company Name
              </th>
            </tr>
          </thead>

          <tbody>
            {data.default.map((user, index) => (
              <tr key={index}>
                <td className="text-[10px] w-80  tracking-tight whitespace-pre px-3 :lg:px-14 lg:mx-12 lg:py-2 text-2xl md:text-xl sm:text-sm md:px-10 md:mx-10 md:py-1.5 sm:px-3 sm:mx-3 sm:py-0.5 hover: bg-slate-100  hover:drop-shadow-xl hover:transition-property: all hover:duration-100  hover:shadow-zinc-600 hover:border-r">
                  {user.name}
                </td>
                <td className="text-[10px] w-80  tracking-tight whitespace-pre px-4 lg:px-14 lg:mx-12 lg:py-2 text-2xl md:text-xl sm:text-sm md:px-10 md:mx-10 md:py-1.5 sm:px-3 sm:mx-3 sm:py-0.5 hover: bg-slate-100 hover:drop-shadow-xl hover:transition-property: all hover:duration-100 hover:shadow-zinc-600 hover:border-r">
                  {user.email}
                </td>
                <td className="text-[10px] w-80  tracking-tight whitespace-pre px-3 lg:px-14 lg:mx-12 lg:py-2 text-2xl md:text-xl sm:text-sm md:px-10 md:mx-10 md:py-1.5 sm:px-3 sm:mx-3 sm:py-0.5 hover: bg-slate-100 hover:drop-shadow-xl hover:transition-property: all hover:duration-100 hover:shadow-zinc-600 hover:border-r">
                  {user.website}
                </td>
                <td className="text-[10px] w-80  tracking-tight whitespace-pre px-3 lg:px-14 lg:mx-14 lg:py-2 text-2xl md:text-xl sm:text-sm md:px-10 md:mx-10 md:py-1.5 sm:px-3 sm:mx-3 sm:py-0.5 hover: bg-slate-100 hover:drop-shadow-xl hover:transition-property: all hover:duration-100 hover:shadow-zinc-600 hover:border-r">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
