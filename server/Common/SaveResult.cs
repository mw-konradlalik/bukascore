using System.Collections.Generic;

namespace BukaScore.Common
{
    public class SaveResult<T>{
        public T SavedModel { get; set; }
        public IList<string> Errors { get; set; }
    }
}