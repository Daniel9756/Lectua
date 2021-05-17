import React, { useReducer } from "react";
// import { withFormik, Formik } from "formik";
// import * as Yup from "yup";
// import ErrorMessage from "../../Error/ErrorMessage";

import { Link } from "react-router-dom";

import { CustomInput } from "../../controls/Input";

// const options = [
//   { value: "birthday", label: "birthday" },
//   { value: "burial", label: "burial" },
// ];

const dynamicSessionInitialState = [1];
const dynamicSessionReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, 1];
    case "REMOVE":
      return state.filter((_, index, arr) => index !== arr.length - 1);
    default:
      return dynamicSessionInitialState;
  }
};

const dynamicSpeakerInitialState = [1];
const dynamicSpeakerReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "REMOVE":
      return state.filter((_, index, arr) => index !== arr.length - 1);
    case "ADD":
      return [...state, 1];
    default:
      return dynamicSpeakerInitialState;
  }
};

function CreateEvent() {
  const [dynamicSession, dynamicSessionDispatch] = useReducer(
    dynamicSessionReducer,
    dynamicSessionInitialState
  );

  const [dynamicSpeaker, dynamicSpeakerDispatch] = useReducer(
    dynamicSpeakerReducer,
    dynamicSpeakerInitialState
  );

  
  return (
    <div className="eventpage">
      {/* <Header /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-2">
            <div className="event-title">
              <h2>Create your Event</h2>

              <p className="_eventP">
                Create your event in less than 5 minutes
              </p>
            </div>
            <div className="event-form">
              <div className="CustomInput-box">
                <form>
                  <div className="event-upload">
                    <span className="upload-icon">
                      <i className="fa fa-upload"></i>
                    </span>
                    <div className="sub-upload">
                      <p className="upload-txt">
                        Drag & Drop or click to add event image
                      </p>
                    </div>
                  </div>
                  <label>Input field</label>
                  <br />
                  <CustomInput
                    type="text"
                    name="banner"
                    placeholder="Enter your event name"
                    //   onChange={handleChange}
                    //   value={values.banner}
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                      height: 40,
                      padding: 10,
                    }}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {/* {touched.banner && errors.banner && (
                        <small style={{ color: "#CA6144" }}>
                          {errors.banner}
                        </small>
                      )} */}
                  </p>

                  <br />
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Enter your event name"
                    //   onChange={handleChange}
                    //   value={values.name}
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                      height: 40,
                      padding: 10,
                    }}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {/* {touched.name && errors.name && (
                        <small style={{ color: "#CA6144" }}>
                          {errors.name}
                        </small>
                      )} */}
                  </p>
                  <label
                    forlabel="category"
                    text="Select Categories"
                    style={{
                      fontSize: 13,
                      marginLeft: "5%",
                      marginTop: 25,
                      color: "#0000005e",
                    }}
                  />
                  <br />
                  <CustomInput
                    name="category"
                    style={{ marginLeft: "5%", marginTop: 0 }}
                    //   options={options}
                    //   value={values.category}
                    //   onChange={handleChange}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {/* {touched.category && errors.category && (
                        <small style={{ color: "#CA6144" }}>
                          {errors.category}
                        </small>
                      )} */}
                  </p>
                  <label
                    forlabel="description"
                    text="Description"
                    style={{
                      fontSize: 13,
                      marginLeft: "5%",
                      marginTop: 25,
                      color: "#0000005e",
                    }}
                  />
                  <br />
                  <CustomInput
                    name="description"
                    placeholder="Enter your bio information"
                    //   onChange={handleChange}
                    //   value={values.description}
                    cols={65}
                    style={{ marginLeft: "5%", marginTop: 0 }}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {/* {touched.description && errors.description && (
                        <small style={{ color: "#CA6144" }}>
                          {errors.description}
                        </small>
                      )} */}
                  </p>
                  <div
                    className="row"
                    style={{
                      width: "94%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div className="col-md-8">
                      <h1>Guest Speaker</h1>

                      <p
                        style={{
                          marginLeft: "5%",
                          marginTop: 0,
                        }}
                      >
                        {/* {touched.guestspeaker && errors.guestspeaker && (
                            <small style={{ color: "#CA6144" }}>
                              {errors.guestspeaker}
                            </small>
                          )} */}
                      </p>

                      <p className="subHeader">
                        Your maximum guest speaker(s) is 1.
                        <Link to="" className>
                          View subscription plan to upgrade
                        </Link>
                      </p>
                    </div>
                    <div
                      className="col-md-3"
                      style={{
                        width: "98%",
                        marginLeft: 44,
                        paddingRight: 0,
                      }}
                    >
                      <div
                        className="gust-form"
                        style={{
                          width: 100,
                          float: "right",
                          marginTop: 20,
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            borderBottomLeftRadius: 4,
                            borderTopLeftRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSpeakerDispatch({ type: "REMOVE" })
                          }
                        >
                          -
                        </button>
                        <span>{dynamicSpeaker.length}</span>
                        <button
                          type="button"
                          style={{
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSpeakerDispatch({ type: "ADD" })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {dynamicSpeaker.map((item, index) => {
                    return (
                      // <GuestSpeakers
                      //   key={item}
                      //   item={item}
                      //   formikProps={formikProps}
                      //   style={{
                      //     width: "98%",
                      //     marginLeft: "auto",
                      //     marginRight: "auto",
                      //   }}
                      // />
                      <div
                        className="row"
                        style={{
                          width: "98%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <div className="col-md-6">
                          <label
                            forlabel={`guestspeakers[${index}].guestname`}
                            text={`Guest ${item}`}
                            style={{
                              fontSize: 13,
                              marginLeft: "5%",
                              marginTop: 5,
                              color: "#0000005e",
                            }}
                          />
                          <br />
                          <CustomInput
                            type="text"
                            name={`guestspeakers[${index}].guestname`}
                            placeholder="Enter guest name"
                            // onChange={handleChange}
                            // value={values.guestname}
                            style={{
                              marginLeft: "5%",
                              marginTop: 0,
                              width: "86%",
                              height: 40,
                              padding: 10,
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            forlabel={`guestspeakers[${index}].guestemail`}
                            text="Email"
                            style={{
                              fontSize: 13,
                              marginLeft: "5%",
                              marginTop: 5,
                              color: "#0000005e",
                            }}
                          />
                          <br />
                          <CustomInput
                            type="text"
                            name={`guestspeakers[${index}].guestemail`}
                            placeholder="Enter guest email address"
                            // onChange={handleChange}
                            // value={values.guestemail}
                            style={{
                              marginLeft: "5%",
                              marginTop: 0,
                              width: "86%",
                              height: 40,
                              padding: 10,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}

                  <div
                    className="row"
                    style={{
                      width: "94%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div className="col-md-8">
                      <h1>Event Session</h1>
                      <p className="subHeader">
                        Your maximum session(s) is 1.
                        <Link to="" className>
                          View subscription plan to upgrade
                        </Link>
                      </p>
                    </div>

                    <div
                      className="col-md-3"
                      style={{
                        width: "98%",
                        marginLeft: 44,
                        paddingRight: 0,
                      }}
                    >
                      <div
                        className="gust-form"
                        style={{
                          width: 100,
                          float: "right",
                          marginTop: 20,
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            borderBottomLeftRadius: 4,
                            borderTopLeftRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSessionDispatch({ type: "REMOVE" })
                          }
                        >
                          -
                        </button>
                        <span>{dynamicSession.length}</span>
                        <button
                          type="button"
                          style={{
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSessionDispatch({ type: "ADD" })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {dynamicSession.length > 0 &&
                    dynamicSession.map((item, index) => {
                      return (
                        // <EventSession
                        //   key={item}
                        //   item={item}
                        //   {...this.state}
                        //   formikProps={formikProps}
                        //   style={{
                        //     width: "95%",
                        //     marginLeft: "auto",
                        //     marginRight: "auto",
                        //   }}
                        // />

                        <div
                          className=""
                          key={index}
                          style={{
                            width: "95%",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                forlabel="Session Name"
                                text={`Session ${item}`}
                                style={{
                                  fontSize: 13,
                                  marginLeft: "5%",
                                  marginTop: 5,
                                  color: "#0000005e",
                                }}
                              />

                              <br />
                              <CustomInput
                                type="text"
                                name={`eventsession[${index}].sessionname`}
                                placeholder="Enter your session name"
                                //   onChange={handleChange}
                                //   value={values.sessionname}
                                style={{
                                  marginLeft: "5%",
                                  marginTop: 0,
                                  width: "95%",
                                  height: 40,
                                  padding: 10,
                                }}
                              />
                            </div>

                            <div className="col-md-6">
                              <label
                                forlabel="Price"
                                text={`Ticket Price ${item}`}
                                style={{
                                  fontSize: 13,
                                  marginLeft: "5%",
                                  marginTop: 5,
                                  color: "#0000005e",
                                }}
                              />
                              <br />
                              <CustomInput />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-6">
                                  <label
                                    forlabel="Start Date"
                                    text="Start Date"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomInput
                                    type="date"
                                    name={`eventsession[${index}].startdate`}
                                    //   onChange={handleChange}
                                    //   value={values.startdate}
                                    style={{
                                      marginTop: 0,
                                      height: 40,
                                      width: 134,
                                      paddingLeft: 13,
                                      paddingRight: 0,
                                    }}
                                    min="2018-01-01"
                                    max="2050-12-31"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label
                                    forlabel="Start Time"
                                    text="Start Time"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomInput
                                    type="time"
                                    name={`eventsession[${index}].starttime`}
                                    //   onChange={handleChange}
                                    //   value={values.starttime}
                                    style={{
                                      marginTop: 0,
                                      height: 40,
                                      padding: 10,
                                    }}
                                    min="09:00"
                                    max="18:00"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-6">
                                  <label
                                    forlabel="End date"
                                    text="End Date"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomInput
                                    type="date"
                                    name={`eventsession[${index}].enddate`}
                                    //   onChange={handleChange}
                                    //   value={values.enddate}
                                    style={{
                                      marginTop: 0,
                                      height: 40,
                                      width: 134,
                                      paddingLeft: 13,
                                      paddingRight: 0,
                                    }}
                                    min="2018-01-01"
                                    max="2050-12-31"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label
                                    forlabel="End Time"
                                    text="End Time"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomInput
                                    type="time"
                                    name={`eventsession[${index}].endtime`}
                                    //   onChange={handleChange}
                                    //   value={values.endtime}
                                    style={{
                                      marginTop: 0,
                                      height: 40,
                                      padding: 10,
                                      width: "68%",
                                    }}
                                    min="09:00"
                                    max="18:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  <button
                    type="submit"
                    text="Publish"
                    //   disabled={isSubmitting}
                    //   onClick={handleSubmit}
                    style={{
                      width: "89%",
                      marginLeft: "5%",
                      marginTop: 20,
                    }}
                  />
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

// const Form = withFormik({

//   validationSchema: Yup.object().shape({
//     banner: Yup.string().required("Please  upload a banner"),
//     name: Yup.string()
//       .min(2, "Name must be atleast two characters long!")
//       .required("Event Name is required"),
//     category: Yup.string().required("Business Name is required"),
//     description: Yup.string()
//       .required("This field is required")
//       .min(10, "Must be atleast 10 characters long!"),
//   }),
//   handleSubmit(values, { props }) {
//     const { submitPublish, event, error } = props;
//     console.log("values during submition", values)
//     submitPublish(values);

//     if (event) {
//      props.history.push("/ManageEvents");
//     } else {
//       return error;
//     }
//   },
// })(CreateEvent);

// CreateEvent.protoTypes = {
//   event: PropTypes.object.isRequired,
//   error: PropTypes.string,
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitPublish: (values) => {
//       dispatch(Creators.createEventRequest(values));
//     },
//   };
// };

// const mapStateToProps = (state) => (
//   console.log(state.event.event, "state event"),
//   {

//   event: state.event.event,
//   error: state.event.error_message,
// });

export default CreateEvent;
// export default connect(mapStateToProps, mapDispatchToProps)(Form);
