import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/483066961_1133535231853309_1326144391045394000_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ktHbgNtTnWAQ7kNvwFGjDsU&_nc_oc=AdmTTVpz-m6UWFD0wcjWxz7wPFRqTLHG30VlF_MD2xO0wuP71XeQnwDP9iSSfbrUe8U&_nc_zt=24&_nc_ht=scontent.fdac14-1.fna&_nc_gid=p_Lv6nHOQ5m68cce1EXKSw&oh=00_AfKdKocbqZG-R63FB74Ingm9dtz3dGPUTNBnaoHwI3hMQw&oe=68201EBF"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="sm:text-lg text-[12px] font-semibold text-gray-100">
            Md Mahi Romjan
          </h3>
          <p className="text-gray-400 sm:text-[14px] text-[12px] text-wrap">
            mdmahiromjansardar@gmail.com
          </p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
