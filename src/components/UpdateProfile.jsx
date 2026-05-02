"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const UpdateProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [preview, setPreview] = useState("");
  const [imgError, setImgError] = useState(false);

  const currentAvatar =
    !imgError && user?.image
      ? user.image
      :`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=22c55e&color=fff`


  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({ name, image });
    setPreview("");
    setImgError(false);
    document.getElementById("update_modal").checked = false;
  };

  return (
    <>
     
      <label
        htmlFor="update_modal"
        className="btn w-full py-2 mt-3 text-center rounded-xl cursor-pointer
          bg-gradient-to-r from-emerald-400 to-green-600
          text-white font-semibold hover:scale-105 transition block"
      >
        Update Profile
      </label>

      <input type="checkbox" id="update_modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box bg-[#0f2d14] text-white border border-green-400/20 backdrop-blur-xl">

         
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="relative w-20 h-20 rounded-full ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#0f2d14] overflow-hidden">
              <Image
                src={currentAvatar}
                alt={user?.name || "User"}
                fill
                className="object-cover rounded-full"
                onError={() => setImgError(true)}
              />
            </div>
            <p className="font-semibold text-lg">{user?.name}</p>
            <p className="text-sm text-green-400/70">{user?.email}</p>
          </div>

          <div className="divider divider-success opacity-30 my-2" />

          
          <form onSubmit={onSubmit} className="space-y-4 mt-4">
            <input
              name="name"
              type="text"
              placeholder="New Name"
              defaultValue={user?.name || ""}
              className="input input-bordered w-full bg-[#0f2d14] text-white border-green-400/30"
            />

            <input
              name="image"
              type="text"
              placeholder="New Image URL"
              className="input input-bordered w-full bg-[#0f2d14] text-white border-green-400/30"
              onChange={(e) => setPreview(e.target.value)}
            />

            
            {preview ? (
              <div className="flex flex-col items-center gap-1">
                <p className="text-xs text-green-400/60">Preview</p>
                <div className="relative w-14 h-14 rounded-full ring-2 ring-emerald-400 overflow-hidden">
                  <Image
                    src={preview}
                    alt="preview"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            ) : (
              <p className="text-center text-sm text-gray-400">No preview</p>
            )}

            <div className="flex gap-2 pt-2">
             
              <label
                htmlFor="update_modal"
                className="btn flex-1 border border-green-400/30 bg-transparent text-white hover:bg-green-400/10"
              >
                Cancel
              </label>
             
              <button className="btn flex-1 bg-gradient-to-r from-emerald-400 to-green-600 text-white border-none hover:scale-105 transition">
                Save
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default UpdateProfile;