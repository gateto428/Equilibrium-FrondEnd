import React, { useEffect } from "react";
import NavbarAdmin from "../home/navBarHomeAdm";
import NavBarUser from "../../personalInformation/navBarUser";
import Course from "./CoursePlanAdm";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getPlan, addCoursePlan } from "../../../redux/actions";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CourseListAdm from "../plan/SelectCoursePlan";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const ShowPlan = (props) => {
  let courseListForm = [];

  const handleStateChange = (e) => {
    let arrAux;
    if (e.target.checked) {
      arrAux = courseListForm;
      arrAux.push(e.target.value);
    } else {
      arrAux = courseListForm;
      arrAux = arrAux.filter((i) => {
        return i !== e.target.value;
      });
    }
    courseListForm = arrAux;
  };

  const accept = async () => {
    for (let i = 0; i < courseListForm.length; i++) {
      await dispatch(
        addCoursePlan(
          {
            idPlan: props?.plan?.idPlan,
            idCourse: courseListForm[i],
            numberClass: 3,
          },
          props?.plan?.idPlan,
          JSON.parse(localStorage.getItem("user"))?.pass
        )
      );
    }
  };

  const dispatch = useDispatch();
  let { idPlan } = useParams();
  const getPlanId = async (id, token) => {
    await dispatch(getPlan(id, token));
  };

  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("user"))?.rolType !== "ADMINISTRATOR"
    )
      setEdit(false);
    getPlanId(idPlan, JSON.parse(localStorage.getItem("user"))?.pass);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        {edit ? <NavbarAdmin /> : <NavBarUser />}
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div className="flex flex-col w-full items-start overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <form method="get" action={edit ? "/planListAdm" : "/select_plan"}>
                <button
                  type="submit"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
              <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 flex items-center justify-center">
                  <div className="App">
                    <h1 className="text-2xl font-bold text-gray-900 sm:pr-12 text-center">
                      <b>Plan</b> <br />
                      {props?.plan?.namePlan}
                    </h1>
                    <div className="pr-4 basis-1/4">
                      <img
                        src={"/imges/logo.jpg"}
                        className="object-contain h-50 w-40"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <section
                    aria-labelledby="options-heading"
                    className="mt-10"
                  >
                    <label className="block text-mt font-medium leading-6 text-gray-900 text-center">
                      <b>Descripción:</b>
                      <br />
                      {props?.plan?.descriptionPlan}
                    </label>
                    <div></div>

                    <div className="mt-10">
                      <label className="block text-mt font-medium leading-6 text-gray-900 text-center">
                        <b>Precio:</b>
                        <br />
                        $ {props?.plan?.costPlan}
                      </label>
                    </div>
                  </section>
                </div>
              </div>
              <br />
              <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 border-t border-black">
                <div className="sm:col-span-12 lg:col-span-12">

                  <div className="basis-1/4 pt-4 pl-0 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
                    <div>
                      <div className="basis-1/4 pt-4 pl-0 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
                        <form method="get" action="/">
                        </form>
                        {edit ? <button onClick={handleOpen} className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                          Añadir cursos
                        </button> : ""}
                        
                      </div>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <CourseListAdm accept = {accept} handleStateChange={handleStateChange}/>
                            </Box>
                          </Modal>
                    </div>
                  </div>
                  <section aria-labelledby="options-heading" className="mt-10">
                    <div
                      className="pl-10 pr-10 mb-9"
                      style={{
                        overflow: "scroll",
                      }}
                    >
                      {props?.plan?.courseList?.map((course) => {
                        return (
                          <Course
                            key={course?.idCourse}
                            course={course}
                            idPlan={idPlan}
                            token={JSON.parse(localStorage.getItem("user"))?.pass}
                            isAdmin={edit}
                          />
                        );
                      })}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    plan: state.plan,
  };
}
export default connect(mapStateToProps, null)(ShowPlan);