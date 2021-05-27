var searchIndex = JSON.parse('{\
"tar":{"doc":"A library for reading and writing TAR archives","t":[3,3,3,3,4,13,4,13,13,13,13,13,13,13,13,13,13,13,13,13,3,12,12,12,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,3,12,12,3,4,13,13,3,12,12,12,12,12,12,12,12,12,12,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Archive","Entries","Builder","Entry","Unpacked","File","EntryType","Regular","Link","Symlink","Char","Block","Directory","Fifo","Continuous","GNULongName","GNULongLink","GNUSparse","XGlobalHeader","XHeader","GnuExtSparseHeader","sparse","isextended","padding","GnuHeader","name","mode","uid","gid","size","mtime","cksum","typeflag","linkname","magic","version","uname","gname","dev_major","dev_minor","atime","ctime","offset","longnames","unused","sparse","isextended","realsize","pad","GnuSparseHeader","offset","numbytes","Header","HeaderMode","Complete","Deterministic","OldHeader","name","mode","uid","gid","size","mtime","cksum","linkflag","linkname","pad","UstarHeader","name","mode","uid","gid","size","mtime","cksum","typeflag","linkname","magic","version","uname","gname","dev_major","dev_minor","prefix","pad","PaxExtension","PaxExtensions","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","into_iter","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","into_iter","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","drop","next","next","clone","clone","clone","default","eq","ne","eq","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","read","new","into_inner","entries","unpack","set_unpack_xattrs","set_preserve_permissions","set_overwrite","set_preserve_mtime","set_ignore_zeros","raw","new","mode","follow_symlinks","get_ref","get_mut","into_inner","append","append_data","append_path","append_path_with_name","append_file","append_dir","append_dir_all","finish","path","path_bytes","link_name","link_name_bytes","pax_extensions","header","size","raw_header_position","raw_file_position","unpack","unpack_in","set_unpack_xattrs","set_preserve_permissions","set_preserve_mtime","new","as_byte","file","hard_link","symlink","character_special","block_special","dir","fifo","contiguous","is_file","is_hard_link","is_symlink","is_character_special","is_block_special","is_dir","is_fifo","is_contiguous","is_gnu_longname","is_gnu_sparse","is_gnu_longlink","is_pax_global_extensions","is_pax_local_extensions","new_gnu","new_ustar","new_old","as_old","as_old_mut","as_ustar","as_ustar_mut","as_gnu","as_gnu_mut","from_byte_slice","as_bytes","as_mut_bytes","set_metadata","set_metadata_in_mode","entry_size","size","set_size","path","path_bytes","set_path","link_name","link_name_bytes","set_link_name","mode","set_mode","uid","set_uid","gid","set_gid","mtime","set_mtime","username","username_bytes","set_username","groupname","groupname_bytes","set_groupname","device_major","set_device_major","device_minor","set_device_minor","entry_type","set_entry_type","cksum","set_cksum","as_header","as_header_mut","path_bytes","set_path","username_bytes","set_username","groupname_bytes","set_groupname","device_major","set_device_major","device_minor","set_device_minor","as_header","as_header_mut","username_bytes","set_username","groupname_bytes","set_groupname","device_major","set_device_major","device_minor","set_device_minor","atime","set_atime","ctime","set_ctime","real_size","is_extended","as_header","as_header_mut","is_empty","offset","length","new","as_bytes","as_mut_bytes","sparse","is_extended","key","key_bytes","value","value_bytes"],"q":["tar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A top-level representation of an archive file.","An iterator over the entries of an archive.","A structure for building archives","A read-only view into an entry of an archive.","When unpacking items the unpacked thing is returned to …","A file was unpacked.","Indicate for the type of file described by a header.","Regular file","Hard link","Symbolic link","Character device","Block device","Directory","Named pipe (fifo)","Implementation-defined ‘high-performance’ type, …","GNU extension - long file name","GNU extension - long link name (link target)","GNU extension - sparse file","Global extended header","Extended Header","Representation of the entry found to represent extended …","","","","Representation of the header of an entry in an archive","","","","","","","","","","","","","","","","","","","","","","","","","Description of the header of a spare entry.","","","Representation of the header of an entry in an archive","Declares the information that should be included when …","All supported metadata, including mod/access times and …","Only metadata that is directly relevant to the identity …","Representation of the header of an entry in an archive","","","","","","","","","","","Representation of the header of an entry in an archive","","","","","","","","","","","","","","","","","","A key/value pair corresponding to a pax extension.","An iterator over the pax extensions in an archive entry.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a new archive with the underlying object as the …","Unwrap this archive, returning the underlying object.","Construct an iterator over the entries in this archive.","Unpacks the contents tarball into the specified <code>dst</code>.","Indicate whether extended file attributes (xattrs on …","Indicate whether extended permissions (like suid on Unix) …","Indicate whether files and symlinks should be overwritten …","Indicate whether access time information is preserved …","Ignore zeroed headers, which would otherwise indicate to …","Indicates whether this iterator will return raw entries …","Create a new archive builder with the underlying object …","Changes the HeaderMode that will be used when reading fs …","Follow symlinks, archiving the contents of the file they …","Gets shared reference to the underlying object.","Gets mutable reference to the underlying object.","Unwrap this archive, returning the underlying object.","Adds a new entry to this archive.","Adds a new entry to this archive with the specified path.","Adds a file on the local filesystem to this archive.","Adds a file on the local filesystem to this archive under …","Adds a file to this archive with the given path as the …","Adds a directory to this archive with the given path as …","Adds a directory and all of its contents (recursively) to …","Finish writing this archive, emitting the termination …","Returns the path name for this entry.","Returns the raw bytes listed for this entry.","Returns the link name for this entry, if any is found.","Returns the link name for this entry, in bytes, if listed.","Returns an iterator over the pax extensions contained in …","Returns access to the header of this entry in the archive.","Returns access to the size of this entry in the archive.","Returns the starting position, in bytes, of the header of …","Returns the starting position, in bytes, of the file of …","Writes this file to the specified location.","Extracts this file under the specified path, avoiding …","Indicate whether extended file attributes (xattrs on …","Indicate whether extended permissions (like suid on Unix) …","Indicate whether access time information is preserved …","Creates a new entry type from a raw byte.","Returns the raw underlying byte that this entry type …","Creates a new entry type representing a regular file.","Creates a new entry type representing a hard link.","Creates a new entry type representing a symlink.","Creates a new entry type representing a character special …","Creates a new entry type representing a block special …","Creates a new entry type representing a directory.","Creates a new entry type representing a FIFO.","Creates a new entry type representing a contiguous file.","Returns whether this type represents a regular file.","Returns whether this type represents a hard link.","Returns whether this type represents a symlink.","Returns whether this type represents a character special …","Returns whether this type represents a block special …","Returns whether this type represents a directory.","Returns whether this type represents a FIFO.","Returns whether this type represents a contiguous file.","Returns whether this type represents a GNU long name …","Returns whether this type represents a GNU sparse header.","Returns whether this type represents a GNU long link …","Returns whether this type represents a GNU long name …","Returns whether this type represents a GNU long link …","Creates a new blank GNU header.","Creates a new blank UStar header.","Creates a new blank old header.","View this archive header as a raw “old” archive …","Same as <code>as_old</code>, but the mutable version.","View this archive header as a raw UStar archive header.","Same as <code>as_ustar_mut</code>, but the mutable version.","View this archive header as a raw GNU archive header.","Same as <code>as_gnu</code>, but the mutable version.","Treats the given byte slice as a header.","Returns a view into this header as a byte array.","Returns a view into this header as a byte array.","Blanket sets the metadata in this header from the …","Sets only the metadata relevant to the given HeaderMode …","Returns the size of entry’s data this header represents.","Returns the file size this header represents.","Encodes the <code>size</code> argument into the size field of this …","Returns the raw path name stored in this header.","Returns the pathname stored in this header as a byte …","Sets the path name for this header.","Returns the link name stored in this header, if any is …","Returns the link name stored in this header as a byte …","Sets the link name for this header.","Returns the mode bits for this file","Encodes the <code>mode</code> provided into this header.","Returns the value of the owner’s user ID field","Encodes the <code>uid</code> provided into this header.","Returns the value of the group’s user ID field","Encodes the <code>gid</code> provided into this header.","Returns the last modification time in Unix time format","Encodes the <code>mtime</code> provided into this header.","Return the user name of the owner of this file.","Returns the user name of the owner of this file, if …","Sets the username inside this header.","Return the group name of the owner of this file.","Returns the group name of the owner of this file, if …","Sets the group name inside this header.","Returns the device major number, if present.","Encodes the value <code>major</code> into the dev_major field of this …","Returns the device minor number, if present.","Encodes the value <code>minor</code> into the dev_minor field of this …","Returns the type of file described by this header.","Sets the type of file that will be described by this …","Returns the checksum field of this header.","Sets the checksum field of this header based on the …","Views this as a normal <code>Header</code>","Views this as a normal <code>Header</code>","See <code>Header::path_bytes</code>","See <code>Header::set_path</code>","See <code>Header::username_bytes</code>","See <code>Header::set_username</code>","See <code>Header::groupname_bytes</code>","See <code>Header::set_groupname</code>","See <code>Header::device_major</code>","See <code>Header::set_device_major</code>","See <code>Header::device_minor</code>","See <code>Header::set_device_minor</code>","Views this as a normal <code>Header</code>","Views this as a normal <code>Header</code>","See <code>Header::username_bytes</code>","See <code>Header::set_username</code>","See <code>Header::groupname_bytes</code>","See <code>Header::set_groupname</code>","See <code>Header::device_major</code>","See <code>Header::set_device_major</code>","See <code>Header::device_minor</code>","See <code>Header::set_device_minor</code>","Returns the last modification time in Unix time format","Encodes the <code>atime</code> provided into this header.","Returns the last modification time in Unix time format","Encodes the <code>ctime</code> provided into this header.","Returns the “real size” of the file this header …","Indicates whether this header will be followed by …","Views this as a normal <code>Header</code>","Views this as a normal <code>Header</code>","Returns true if block is empty","Offset of the block from the start of the file","Length of the block","Crates a new zero’d out sparse header entry.","Returns a view into this header as a byte array.","Returns a view into this header as a byte array.","Returns a slice of the underlying sparse headers.","Indicates if another sparse header should be following …","Returns the key for this key/value pair parsed as a …","Returns the underlying raw bytes for the key of this …","Returns the value for this key/value pair parsed as a …","Returns the underlying raw bytes for this value of this …"],"i":[0,0,0,0,0,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,3,3,3,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,5,5,0,0,6,6,0,7,7,7,7,7,7,7,7,7,7,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,13,13,13,13,13,13,13,13,13,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,4,4,4,4,4,4,4,5,5,5,5,5,5,5,3,3,3,3,3,3,3,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,11,10,14,2,6,13,3,2,2,6,1,2,6,13,7,8,4,5,12,9,9,9,9,9,9,9,9,9,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,7,7,8,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,3,3,3,3,3,15,15,15,15],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[],[["result",6],["option",4]]],[[],[["option",4],["result",6]]],[[],["entrytype",4]],[[],["headermode",4]],[[],["header",3]],[[]],[[["entrytype",4]],["bool",15]],[[["entrytype",4]],["bool",15]],[[["headermode",4]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[],[["usize",15],["result",6]]],[[],["archive",3]],[[]],[[],[["entries",3],["result",6]]],[[["asref",8],["path",3]],["result",6]],[[["bool",15]]],[[["bool",15]]],[[["bool",15]]],[[["bool",15]]],[[["bool",15]]],[[["bool",15]],["entries",3]],[[],["builder",3]],[[["headermode",4]]],[[["bool",15]]],[[]],[[]],[[],["result",6]],[[["header",3],["read",8]],["result",6]],[[["header",3],["asref",8],["path",3],["read",8]],["result",6]],[[["asref",8],["path",3]],["result",6]],[[["asref",8],["path",3]],["result",6]],[[["asref",8],["path",3],["file",3]],["result",6]],[[],["result",6]],[[],["result",6]],[[],["result",6]],[[],[["cow",4],["result",6]]],[[],["cow",4]],[[],[["result",6],["option",4]]],[[],[["option",4],["cow",4]]],[[],[["result",6],["option",4]]],[[],["header",3]],[[],["u64",15]],[[],["u64",15]],[[],["u64",15]],[[["asref",8],["path",3]],[["result",6],["unpacked",4]]],[[["asref",8],["path",3]],[["bool",15],["result",6]]],[[["bool",15]]],[[["bool",15]]],[[["bool",15]]],[[["u8",15]],["entrytype",4]],[[],["u8",15]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["entrytype",4]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["header",3]],[[],["header",3]],[[],["header",3]],[[],["oldheader",3]],[[],["oldheader",3]],[[],[["ustarheader",3],["option",4]]],[[],[["option",4],["ustarheader",3]]],[[],[["option",4],["gnuheader",3]]],[[],[["gnuheader",3],["option",4]]],[[],["header",3]],[[]],[[]],[[["metadata",3]]],[[["headermode",4],["metadata",3]]],[[],[["result",6],["u64",15]]],[[],[["result",6],["u64",15]]],[[["u64",15]]],[[],[["cow",4],["result",6]]],[[],["cow",4]],[[["asref",8],["path",3]],["result",6]],[[],[["result",6],["option",4]]],[[],[["option",4],["cow",4]]],[[["asref",8],["path",3]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]]],[[],[["result",6],["u64",15]]],[[["u64",15]]],[[],[["result",6],["u64",15]]],[[["u64",15]]],[[],[["result",6],["u64",15]]],[[["u64",15]]],[[],[["option",4],["utf8error",3],["result",4]]],[[],["option",4]],[[["str",15]],["result",6]],[[],[["option",4],["utf8error",3],["result",4]]],[[],["option",4]],[[["str",15]],["result",6]],[[],[["result",6],["option",4]]],[[["u32",15]],["result",6]],[[],[["result",6],["option",4]]],[[["u32",15]],["result",6]],[[],["entrytype",4]],[[["entrytype",4]]],[[],[["u32",15],["result",6]]],[[]],[[],["header",3]],[[],["header",3]],[[],["cow",4]],[[["asref",8],["path",3]],["result",6]],[[]],[[["str",15]],["result",6]],[[]],[[["str",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]]],[[],[["u32",15],["result",6]]],[[["u32",15]]],[[],["header",3]],[[],["header",3]],[[]],[[["str",15]],["result",6]],[[]],[[["str",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]]],[[],[["u32",15],["result",6]]],[[["u32",15]]],[[],[["result",6],["u64",15]]],[[["u64",15]]],[[],[["result",6],["u64",15]]],[[["u64",15]]],[[],[["result",6],["u64",15]]],[[],["bool",15]],[[],["header",3]],[[],["header",3]],[[],["bool",15]],[[],[["result",6],["u64",15]]],[[],[["result",6],["u64",15]]],[[],["gnuextsparseheader",3]],[[]],[[]],[[]],[[],["bool",15]],[[],[["str",15],["utf8error",3],["result",4]]],[[]],[[],[["str",15],["utf8error",3],["result",4]]],[[]]],"p":[[4,"Unpacked"],[4,"EntryType"],[3,"GnuExtSparseHeader"],[3,"GnuHeader"],[3,"GnuSparseHeader"],[4,"HeaderMode"],[3,"OldHeader"],[3,"UstarHeader"],[3,"Archive"],[3,"Entries"],[3,"Builder"],[3,"Entry"],[3,"Header"],[3,"PaxExtensions"],[3,"PaxExtension"]]}\
}');
initSearch(searchIndex);