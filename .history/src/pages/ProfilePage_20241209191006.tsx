import { Link, Outlet } from "react-router-dom"
import HedarProfaile from "../ui/HedarProfaile"

export default function ProfilePage() {


  return (
    <section>
        <div className="  h-[3rem] bg-[#00bfd6] ">
            <div className=" max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem] ">
                  <Link to={""}>
                    <img className=" w-[100px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAABtCAYAAABOQ30TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0JBODkzQzdEQjY5MTFFOEE0MDBCMTVGNDE0NTdBQjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0JBODkzQzZEQjY5MTFFOEE0MDBCMTVGNDE0NTdBQjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkNBNDc5RDVBQTIzMTFFODhBMjE4MTkyMjBDRjc0NEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkNBNDc5RDZBQTIzMTFFODhBMjE4MTkyMjBDRjc0NEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Z7TzZAAAWZElEQVR42uyd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" alt="" />
                  </Link>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-6">
                          <path className=" font-semibold" stroke="white"  stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                  </span>
            </div>
            <Outlet />
            <HedarProfaile />
            <div className="max-w-[54rem]  px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
                <div className=" bg-[] border-[1px] flex flex-col gap-[1rem] p-[2rem] border-[#ececec] rounded-[.625rem] ">
                   <div className="  w-[100%] border-b-[3px] border-[#dbdbdb] pb-[1.8rem]">
                      <p className=" text-[#6b6b6b]"> پروفایل شما </p>
                   </div>
                   <div className="  w-[100%] border-b-[1px] border-[#dbdbdb] pb-[1.8rem]">
                      <Link to={""} className=" flex flex-row-reverse items-center w-[100%] justify-between">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(209, 209, 209)" ,fontSize:"1.75rem"}  }><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
                          <p className=" text-[#6b6b6b]">  پزشکان موردعلاقه </p>
                      </Link>
                   </div>
                   <div className="  w-[100%] border-b-[1px] border-[#dbdbdb] pb-[1.8rem]">
                      <Link to={""} className=" flex flex-row-reverse items-center w-[100%] justify-between">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(209, 209, 209)" ,fontSize:"1.75rem"}  }><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
                          <p className=" text-[#6b6b6b]"> لیست پزشکان   </p>
                      </Link>
                   </div>
                   <div className="  w-[100%] border-b-[1px] border-[#dbdbdb] pb-[1.8rem]">
                      <Link to={""} className=" flex flex-row-reverse items-center w-[100%] justify-between">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(209, 209, 209)" ,fontSize:"1.75rem"}  }><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
                          <p className=" text-[#6b6b6b]"> سوالات پزشکی من </p>
                      </Link>
                   </div>
                   <div className="  w-[100%]">
                      <button  className=" flex flex-row-reverse items-center w-[100%] justify-between">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(209, 209, 209)" ,fontSize:"1.75rem"}  }><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
                          <p className=" text-[#6b6b6b]">  خروج از حساب  </p>
                      </button>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}
