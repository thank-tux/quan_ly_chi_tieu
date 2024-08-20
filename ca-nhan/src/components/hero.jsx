export const Hero = () => {
  return (
    <>
      <section className="bg-gray-100 w-[100%] h-[90%]  ">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Phần mềm quản lý chi tiêu cá nhân
              <strong className="font-extrabold text-green-900 sm:block">
                {" "}
                cá nhân và gia đình.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
            Đa dạng các tính năng giúp người dùng lưu trữ, quản lý chi tiêu, thiết lập dòng tiền,…
            </p>

          </div>
        </div>
      </section>
    </>
  );
};
