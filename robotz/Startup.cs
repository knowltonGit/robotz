using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(robotz.Startup))]
namespace robotz
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
